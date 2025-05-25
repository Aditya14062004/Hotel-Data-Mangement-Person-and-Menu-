const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/',async function(req,res){
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

router.get('/',async function(req,res){
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

router.get('/:tasteType', async(req, res)=>{
try{
    const tasteType = req.params.tasteType; // Extract the work type from the URL parameter
    if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy') {
        const response = await MenuItem.find({taste: tasteType});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        console.log("Invalid Taste Type");
        res.status(404).json({error: 'Invalid Taste type'});
    }
}catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
}
})

router.put("/:id", async (req, res)=>{
    try{
        const menuItemId = req.params.id;  // Extract the id from the URL parameter
        const updatedMenuItemData = req.body; // Updated data for the menu item

        const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuItemData, {
            new: true, // Return the updated document
            runValidators: true // Run Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(error){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const menuItemId = req.params.id; // Extract the person's ID from the URL parameter

        // Assuming you have a Person model
        const response = await MenuItem.findByIdAndDelete(menuItemId);
        if (!response) {
            return res.status(404).json({ error: 'Menu item not found'});
        }
        console.log('data delete')
        res.status(200).json({message: 'Menu Item Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;