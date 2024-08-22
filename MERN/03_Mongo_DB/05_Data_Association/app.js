const express = require('express')
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (req, res){
    res.send("hey");
})

app.get("/create", async function(req,res){
    let user = await userModel.create({
        username:"harsh",
        age:25,
        email:"harsh@gmail.com"
    });

    res.send(user);
})

app.get("/post/create", async function(req,res){
    let post = await postModel.create({
        postdata:"hello how are you",
        user: "66c4cfb035c07f04c959f346",
    })

    let user = await userModel.findOne({_id: "66c4cfb035c07f04c959f346"})
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);
