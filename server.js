const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("i am root!");
});

//index-users
app.get("/users", (req, res) => {
    res.send("GET for users");
})

//show-users
app.get("/users/:id", (req, res) => {
    res.send("GET for show users");
})

//post-users
app.post("/users", (req, res) => {
    res.send("POST for users");
})

//delete-users
app.delete("/users/:id", (req, res) => {
    res.send("DELETE for users id");
})

//posts
//index
app.get("/posts", (req, res) => {
    res.send("GET for post");
})

//show-users
app.get("/posts/:id", (req, res) => {
    res.send("GET for post users");
})

//post-users
app.post("/posts", (req, res) => {
    res.send("POST for users");
})

//delete-users
app.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
})

app.listen(3000, () => {
    console.log("server is listening at 3000");
});