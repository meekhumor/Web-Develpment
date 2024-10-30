import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()~{}";

    for(let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  const copyPasswordToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' ref={passwordRef}/>
          <button onClick={copyPasswordToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min="8" max="32" value={length} className="curser-pointer" onChange={(e) => setLength(e.target.value)}/>
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} />
            <label >Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
