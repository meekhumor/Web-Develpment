

#include<ESP32Servo.h>
#include <dht11.h>

#define IR1Input 26
#define IR2Input 25 
#define GasSensorA 32
//#define GasSensorD 13
#define ServoWindow 27
#define ServoMCB 14
#define DHT11PIN 33
#define Potentiometer 35
#define LEDPin 18
#define ldrPin 5
#define BuzzerPin 4

int IR1OUTPUT;
int IR2OUTPUT;
int i;
int GasSensorValue;
//int GasDigitalValue;
int TempValue;
int HumValue;
int BlindValue;
int PotentiometerValue;
int ldr;

Servo WindowOpen;
Servo MCBTrip;

dht11 DHT11;

void setup() {
  
  Serial.begin(9600);

  pinMode(IR1Input,INPUT);
  pinMode(IR2Input,INPUT);
//pinMode(GasSensorD, INPUT);
  pinMode(GasSensorA, INPUT);
  pinMode(Potentiometer,OUTPUT);
  pinMode(LEDPin,OUTPUT);
  pinMode(ldrPin, INPUT);
  pinMode(BuzzerPin,OUTPUT);

  WindowOpen.attach(ServoWindow);
  MCBTrip.attach(ServoMCB);
}

void loop() {

//..........................LDR Sensor.....................................
ldr = digitalRead(ldrPin);

if (ldr < 1)
{
  digitalWrite(LEDPin, HIGH);
}

  
//..........................IR Sensor......................................
  IR1OUTPUT = digitalRead(IR1Input);
  IR2OUTPUT = digitalRead(IR2Input);
 if (IR1OUTPUT==0)
 {
  Serial.println("Lights On");
  digitalWrite(LEDPin,HIGH);
  digitalWrite(BuzzerPin,HIGH);
  delay(1000);
  digitalWrite(BuzzerPin,LOW);
 } 
 else if(IR2OUTPUT==0)
 {
  Serial.println("Lights Off");
  digitalWrite(LEDPin,LOW);
   digitalWrite(BuzzerPin,HIGH);
  delay(1000);
  digitalWrite(BuzzerPin,LOW);
 } 

  
//...............................Gas Sensor.................................  
  GasSensorValue = analogRead(GasSensorA); 
  Serial.print("Gas Sensor Value - ");
  Serial.println(GasSensorValue);
  if(GasSensorValue>=3000)    //Check Value Here 
  {
    RescueGas();
    Serial.print("Rescue Gas   -   ");
    Serial.println(GasSensorValue);
  }
  else
  {
    
  }
//..............................DHT Code.................................
int chk = DHT11.read(DHT11PIN);

  TempValue=DHT11.temperature;
  HumValue=DHT11.humidity;
  Serial.print("Temp (C) ");
  Serial.println(TempValue);
  if(TempValue<20)
  {
    HeaterStart();
  }
  else if(TempValue>30)
  {
    FanStart();
  } 
//...............................Blinds Code.............................
 PotentiometerValue=analogRead(Potentiometer);

  BlindValue=map(PotentiometerValue,0,4095,0,100);
  BlindStatus();

}

//...............................Functions..................................
void RescueGas ()
{
  WindowOpen.write(90);
  MCBTrip.write(90);
  delay(1000);
  WindowOpen.write(0);
  MCBTrip.write(0);
}

void HeaterStart()
{
  Serial.println("Heater Working");
}

void FanStart()
{
  Serial.println("Fan Working");
}

void BlindStatus()
{
  Serial.print("Blinds Close % ");
  Serial.println(BlindValue);  
}


