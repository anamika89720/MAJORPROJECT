require('dotenv').config();
//console.log(process.env.SECRET);
//console.log("ENV CHECK:", process.env.CLOUD_NAME);

// if(process.env.NODE_ENV != "production"){
// require('dotenv').config();
// }
//console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
//const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
//const review = require("./models/review.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

//const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbURL = process.env.ATLASDB_URL;

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbURL);
}

console.log("Views directory path:", app.get("views"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")));

const store = MongoStore.create({
    mongoUrl: dbURL,
    crypto: {
        secret: "mysupersecretcode"
    },
    touchAfter: 24*3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO-SESSION STORE", err);
})

const sessionOption = {
    store,
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 *24 * 60 * 60 * 1000,
        maxAge : 7 *24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    //console.log(res.locals.success);
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async(req, res) => {
//          let fakeUser = new User({
//             email: "student1@gmail.com",
//             username: "Alpha-student"
//          }) ;

//        let registeredUser = await User.register(fakeUser, "hellouser");//register method use
//        res.send(registeredUser);
// });
// ye redirect ho rha root of local host pe 
// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });





app.use("/listings", listingRouter);
app.use("/listings/:id", reviewRouter);
app.use("/", userRouter);

//app.get("/testListing", async (req, res) => {
//    let sampleListing = new Listing({
  //      title: "My New Villa",
   //     description: "By the Beach", 
  //      price: 2000,
  //      location: "Palolem, Goa",
 //       country: "India",
  //  });

  //  await sampleListing.save();
 //   console.log("Sample listing saved to DB");
 //   res.send("Successful testing");
//});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page not found"));
})
app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong"} = err;
    //res.send("something went wrong!");
    //res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{ message });
})

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
