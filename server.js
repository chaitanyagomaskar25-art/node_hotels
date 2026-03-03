// console.log("server file is running")
// console.log("hello world")

const { default: mongoose } = require("mongoose");

// const { log } = require("console");
// const cookieParser = require("cookie-parser");
// const { response } = require("express")

// const fs = require('fs');
// console.log(fs.readFileSync('notes.js'))
// fs.writeFileSync("inform.txt", "System Info");

// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());

// fs.writeFileSync("info.txt", "System Info");

// console.log("Platform:", os.platform());
// console.log("Memory:", os.totalmem());


// let user = os.userInfo()
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n',()=>{console.log('file is created')});;

// console.log(os);
// console.log(fs);


// To import files to run in server 
// if we have file name == notes.js


// const notes = require('./notes.js')

// let name = notes.name;
// let age = notes.age;
// let city = notes.city;
// let result = notes.addNumber(5, 8)

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(result);


// const _ = require('lodash');

// let arr = [3,4,"hii", "hello", 5,3, 2, 2, 2,"hii", "hello",5,3, 2,"hii", "hello", 7];

// let filter = _.uniq(arr)

// console.log(filter);




// const notes = require('./notes.js');

// let mgs = notes.msg;

// console.log(mgs);


// const n = require("./notes.js");

// let A = n.a;
// let B = n.b;

// console.log(A+B);

// const _ = require("lodash");

// const obj1 = { name: "Ram" };
// const obj2 = { age: 20 };

// console.log(_.merge(obj1, obj2));
// console.log(_.capitalize("hello world"));

// console.log(_.isEqual({a:1}, {a:2}));


// const users = [
//   { name: "Ram", age: 20 },
//   { name: "Shyam", age: 20 },
//   { name: "Ram", age: 20 }
// ];

// const uniqueUsers = _.uniqBy(users, "name");

// console.log(uniqueUsers);


// console.log(_.chunk([1,2,3,4,5,6], 2));


// ============================ 14/ 2/ 26 =======================================

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello, i am chaitanya . Welcome in my server')
// })


// app.get('/chicken', (req, res)=>{
//     res.send('welcome sir')
// })

// app.listen(3000, ()=>{
//     console.log('listening on port 3000');
    
// })


// const express = require('express');
// const app = express()

// app.get('/daal', (req, res)=>{
//     res.send('Good Evening Guys.....')
// })

// app.listen(3000,()=>{
//     console.log("Hiiii.....");
    
// })


// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000;
// const path = require('path')
// const heading = 'hello world!'
// // app.get('/', (req, res)=>{
// //     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// // }) 

// // set a static folder
// // app.use(express.static(path.join(__dirnamem, 'public')))

// const moment = require('moment')

// // to get url of our page
// const url = (req, res, next)=>{
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
//     next()
// }
// app.use(url); 



// // creating rest api
// app.get('/api/first', (req, res)=>{
//     res.json(heading)
// })

// app.listen(PORT, ()=>console.log(`hello wolrd, ${PORT}`))



// =============== 17/2/26 ===========================================================


// custom scripts and default scripts

// intro to express.js =>
// it's npm package and a framework of nodejs
// framework => things in the flow , we need to do everything in flow and we can decide what should inside that
// it manages everything from recieving request to giving back response 

// setting up a basic express application =>
    // const express = require('express')
    // const app = express();
// creating routes=> 
    // app.get("route", requestHandler(middleware)) = > basic syntax
    // app.get("/", (req, res)=>{
    //     res.send("champion first")
    // })
    // app.get("/profile", (req, res)=>{
    //     res.send("champion second")
    // })
    // app.listen(3000);
 
// middleware =>
    //  when server accept request from that to stop the request to reach and perform some operation called , middleware
    //  2 ways to use middleware
    // 1.=>
        // app.use(function(req, res, next){
        //     console.log("middleware")
        //     next()
        // }); 
        // => before sending response


// handling response and request => frontend - backend - frontend

// error handling => applied at last of code
//    app.get('/profile', (req,res,next)=>{
//     return next(new Error('not implemented')); => it will show on console
//    })

//     app.use((err,req,res,next) => {
//         console.error(err.stack)
//         res.status(500).send('something broke!') => show on webpage
//     })

// =========== 18/2/26 =================================================== 

// Form handling and working with the forms

//  session, cookie =>
    // we can put any data on frontend browser and when you send any request to backend , data on frontend automatically goes to backend.
    // we are linked with server from when we log in to logged out , called session .

// const express = require('express')
// const app = express();

// app.use(express.json()); //This tells Express to understand JSON data coming from the client.
// app.use(express.urlencoded({extended : true})); //This line is used to read form data (data coming from HTML forms).

// app.get("/", (req, res)=>{
//         res.send("champion first")
// })
// app.get("/profile", (req, res)=>{
//         res.send("champion second")
// })
// app.listen(3000);



// setting up parsers for form =>
    // app.use(express.json());
    // app.use(express.urlencoded({extended : true}));

// setting up EJS for EJS pages =>
    // install ejs from npm
    // setup ejs as a view engine

// setting up public static files =>
    // const path = require('path')
    // console.log(path.join(__dirname, '/public'));


// dynamic routing 
// 1. dynamic routing =>
    // app.get('/profile/:username', (req, res)=>{
    // res.send("index")
    // });
// 2. how to get data coming fro,m frontend at backend route



// const express = require('express')
// const app = express()
// const path = require('path')

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

// app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs')

// app.get('/', (req, res)=>{
//     res.render("index")
// });
// app.get('/profile/:username', (req, res)=>{
//     res.send(` Welcome, ${req.params.username}`)
//     });
// app.get('/author/:username/:age', (req, res)=>{
//     res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
// })
// app.listen(3000, ()=>{
//     console.log(("Completed"));
    
// })


// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');

// app.get('/', (req, res)=>{
//     res.render("index")
// });
// app.get('/profile/:username/:age/:city', (req, res)=>{
//     res.send(`hello ${req.params.username} of age ${req.params.age} from ${req.params.city}`)
// })
// app.listen(3000,()=> {
//     console.log('completed');
// })



// Data storage => in which we can store user's info including images, files, audio, videos, text
// Types of DBS => SQL & NoSQL
// SQL => data stored in table format 
// NoSQL => data stored in objects format , it's concept not actual database
// mongoDB => it is actual database and works on NoSQL basis
// why monoDB => to stored all data related to user

// backend server => application server(handles all things expect database work like login logout) and database server

// database server => Database - collections - document
// when mongoose.connect => database create
// when model create = > collections create
// CRAETE => document create 

// mongoDB installation
// mongoDB connection
// schema
// model
// CRUD


// const express = require('express');
// const app = express();

// const userModel = require('./usermodel');

// app.get('/', (req, res)=>{
//     res.send("hey")
// });

// app.get('/create', async (req, res)=>{
//    let createduser = await userModel.create({
//         name : "ChaitanyaG",
//         email : "chaituG@gmail.com",
//         username : "chaituG"
//     })
//     res.send(createduser);
// });

// app.get('/read', async (req, res)=>{
//     let users = await userModel.find();

//     res.send(users);
// });

// app.get('/update', async (req, res)=>{
//   let updatedUser = await userModel.findOneAndUpdate(
//     { username: "chaitu" },   
//     { name: "Chaitanya Hivraj Gomaskar" },
//     { returnDocument: 'after' }
//   );
  
//   res.send(updatedUser);
// });

// app.get('/delete', async (req, res)=>{
//     let users = await userModel.findOneAndDelete({username: "chaituG"});

//     res.send("Your account has been deleted. ");
// });

// app.listen(3000)


// const express = require("express");
// const app = express();
// const path = require("path")
// const userModel = require('./models/user');

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({extended : true}));
// app.use(express.static(path.join(__dirname, 'public')))

// app.get("/", (req, res)=>{
//     res.render("index")
// })

// app.get("/read", async (req, res)=>{
//     let users = await userModel.find(req.params.id);
//     res.render("read", {users})
// });

// app.get("/edit/:userid", async (req, res)=>{
//    let user = await userModel.findById(req.params.userid);
//     res.render("edit", {user})
// });

// app.post("/update/:userid", async (req, res)=>{
//     let {image, name, email} = req.body;
//    let user = await userModel.findOneAndUpdate(
//     {_id: req.params.userid}, 
//     {image, name, email},
//     {returnDocument: 'after'}
//  );
//     res.redirect("/read")
// });

// app.get("/delete/:id", async (req, res)=>{
//     let users = await userModel.findOneAndDelete();
//     res.redirect("/read");
// });


// app.post("/create", async (req, res)=>{
//    let {name, email, image} = req.body;
//     await userModel.create({ name, email, image })
//     res.redirect("/read")
// });

// app.listen(3000);



// ======= 25/2/26 ==================================================
// Authentication =>  process of checking identity is called authentication
// authorization =>  We have permission to do something


// 1) how to set and read cookie =>
// const express = require('express');
// const app = express();

// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// app.get("/", (req, res)=>{
//     res.cookie("name", "chaitu")
//     res.send("done")
// });

// app.get("/read", (req, res)=>{
//     console.log(req.cookies)
//     res.send("read page")
// });

// app.listen(3000)
// app.listen(3000)


// 2) how to use bcrypt for password ecryption and decryption
// encrypt => writing users sensitive data in any code language because hackres cannot find users actual data
// 3) what is jwt and how to store and remove data in jwt 


// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');


// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// app.get("/", (req, res)=>{
//     bcrypt.genSalt(10, (err, salt)=>{
//         bcrypt.hash("writeYourPassword", salt, (err, hash)=>{
//             console.log(hash);
            
//         })
        
//     })
// });



// // app.get("/read", (req, res)=>{
// //     console.log(req.cookies)
// //     res.send("read page")
// // });

// app.listen(3000)

// ============26/2/26===================================================

// Why we should use mongoBD over SQL
// How to create, update, delete, read data stored in mongoDB
// how we can use and create db and how we can see db data in structured way. 
// how send post request properly
// const express = require('express');
// const app = express();


// app.get('/', (req, res)=>{
//     res.send("hey")
// });

// app.post('/items',(req, res)=>{
// console.log("data saved");

// })
// app.listen(3000)

// connecting mongoDB with node server => npm i mongodb 
// mongoose => is like translater which used to connect node.js with mongodb
// -  it makes working smooth and easier
// - very easy to query from the db
// - it's ODM(object document model)



// ========================= 27/2/26 ===============================================

// Database connection

// const express = require('express');
// const app = express();

// // exporting mongoDb to nodejs file
// const db = require('./db')

// // body parser set up 
// const bodyParser = require('body-parser');
// app.use(bodyParser.json())

// // exporting model/schema
// const Person = require('./models/Person');
// const Menu = require('./models/Menu');

// app.get('/',(req, res)=>{
//     res.send("Welcome")
// });

// app.post('/person', async (req, res)=>{

//     try {   
//     const data = req.body 
//     const newPerson = new Person(data);
//     const responce = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(responce)
    
//     } catch (err) {
//         console.log(err);
//         res.status(500). json({error: 'internal error'})
//     }
    
// });

// app.get('/person', async (req, res)=>{
//     try {
//         const data = await Person.find();
//         console.log("data fetched");
//         res.status(200).json(data)

//     } catch (err) {
//          console.log(err);
//         res.status(500). json({error: 'internal error'})
//     }
// });



// app.post('/menu', async (req, res)=>{

//     try {     
//     const data = req.body 
//     const newMenu = new Menu(data);
//     const responce = await newMenu.save();
//     console.log("data saved");
//     res.status(200).json(responce)
    
//     } catch (err) {
//         console.log(err);
//         res.status(500). json({error: 'internal error'})
//     }
    
// });

// app.get('/menu', async (req, res)=>{
//     try {
//         const data = await Menu.find();
//         console.log("data fetched");
//         res.status(200).json(data)

//     } catch (err) {
//          console.log(err);
//         res.status(500). json({error: 'internal error'})
//     }
// });



// app.listen(3000)

// Models & schema
// -models are like blueprint of our db
// - it's representation of specific collection in mongoDB
// - once you have defined model you can create, read, update, and delete documents in the in the corresponding MongoDB collections
// - schema is like a blurprint that defines the structure and data type of your documents within a collection

// Body parser
// - it's middleware library for express.js
// - it is used to parse and extract body of incoming HTTP requests
// - it helps to parse and extract different type of data from request so that you can work with it in your express.js application
// - it processes request body before it reaches your route handlers, making parsed data available in the req.body for further processing
// - bodyParser.json() automatically parse data

// data.save()=>
    // - this doesn't use callback function
// - instead of callback we use async await function

// app.post('/person',(req, res)=>{

//     const data = req.body 
//     // create new person document using mongoose model
//     const newPerson = new Person();

//     // instead of writing this much step again and again we can do =>
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.address = data.address;
   
//     // we can do this
//     newPerson.save((error, savedPerson)=>{
//         if(error){
//             console.log("Error in saving data", error);
//             res.status(500).json({error: 'Internal server error'})  
//         }else {
//             console.log('data saved successfully');
//             res.status(200).json(savedPerson);
            
//         }
//     })
// })

// ============ 28/2/26 ==============================================================================



const express = require('express');
const app = express();

require('dotenv').config(); // this tell server have .env file and server takes data from it

// exporting mongoDb to nodejs file
const db = require('./db')

// body parser set up 
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.send("Welcome to our Hotel")
});


const personRoutes = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRoutes');


app.use('/person', personRoutes);
app.use('/menu', menuRouter);

// to access .env files variable we use process.env.variableName
const PORT = process.env.PORT || 3000

app.listen(3000)


// express router => express router is a way to modularize and organize your route handling code in an express.js application 
// ============= 3/3/26===================================================
// hoisting => 

// git => it is like time machine for your code.
// --- it is a tool that keeps record of every version of your code, so you can always go back to previous state if something goes wrong.
// to start git => git init
// to check status => git status
// to add file => git add filename 
// to add all files at once => git add .
// to remove added data => git rm -r --cached filename
//  to save it's snapshort => git commit -m "useful massege"
//  to push it on github => create new repo and add commands for push
// to make all changes visible on github => git push
// if other person is also working on same repo and we want that persons changes in our file => git pull

// host mongoDB database
// ---mongodb have it's own server called mongoDB Atlas which provides free cluster for user where you can host your database for free.
// --- mongoDB Atlas offers a cloud-based platform for hosting MongoDB databases.
// --- the free tier allows developers to explore and experiment with db without incurring any cost


// cluster => small part of db
// dotenv => it's a module used to manage sensitive information in your application 
// --- it is useful for keeping sensitive data like API key, database connections strings and other environment-specific configurations seperated from your code

// hosting nodejs => 