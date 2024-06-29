* Install mongodb
* Install mongoosejs : npm i mongoose
* Require and setup connection
* Make schema <!-- Basic architecture of every record-->
* Create model and export

* Boiler plate
    ```
    const mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/DBname")

    const userSchema = mongoose.Schema({
        username: String,
        email: String,
        password: String,
        role: String
    })

    module.exports = mongoose.model("collectionName", userschema);

    ```