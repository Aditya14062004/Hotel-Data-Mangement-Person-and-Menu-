// From below we are doing the CRUD operations and above code is for understanding the JS.
// Creating a server and using it's property such as GET, POST, etc
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); // With this line get to know that .env file is configured there.

const bodyParser = require('body-parser')
app.use(bodyParser.json());//req.body
const PORT = process.env.PORT || 3000; // If the value of port is available in env file than it will use that port value otherwise it will use local port no. 3000

app.get('/first', function(req,res){
    res.send('Hello World');
})

app.get('/', function(req,res){
    res.send('Welcome to my hotel... How i can help you?, we have list of menus');
})

app.get('/greeting', function(req,res){
    res.send("What would you like to eat");
})

app.get('/idli', function(req,res){
    res.send("Here is your idli");
})

app.get('/dosa', function(req,res){
    res.send("Here is your dosa");
})

/** 
app.post('/person',async function(req,res){
    try{
        const data = req.body // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
*/

/**
// GET method to get the person
app.get('/person',async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
*/


/**
app.post('/menuItem',async function(req,res){
    try{
        const data = req.body;

        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save();
        console.log("Data Saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
 */    

/**
app.get('/menuItem',async function(req,res){
    try{
        const data = await MenuItem.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
 */    

/**
app.get('/person/:workType', async(req, res)=>{
try{
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter') {
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        console.log("Invalid Work Type");
        res.status(404).json({error: 'Invalid work type'});
    }
}catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
}
})
*/

// Import the router file
const personRoutes = require('./routes/personRoutes')
const menuItemsRoutes = require('./routes/menuItemsRoutes')

// Use the router file
app.use("/person",personRoutes);
app.use("/menuItem",menuItemsRoutes);

app.listen(3000, ()=>{
    console.log("Server is running");
});