const express = require('express');
const router = express.Router();

const Menu = require('./../models/Menu');

router.post('/', async (req, res)=>{

    try {     
    const data = req.body 
    const newMenu = new Menu(data);
    const responce = await newMenu.save();
    console.log("data saved");
    res.status(200).json(responce)
    
    } catch (err) {
        console.log(err);
        res.status(500). json({error: 'internal error'})
    }
    
});

router.get('/', async (req, res)=>{
    try {
        const data = await Menu.find();
        console.log("data fetched");
        res.status(200).json(data)

    } catch (err) {
         console.log(err);
        res.status(500). json({error: 'internal error'})
    }
});

router.get('/:taste', async (req, res)=>{
   const taste = req.params.taste;
    try {
        if(taste == 'sour' || taste == 'sweet' || taste == 'spicy'){
            
            const responce = await Menu.find({taste: taste});
            console.log('responce fetched');
            res.status(200).json(responce);

        } else{
            res.status(404).json({error: 'invalid taste type'})
        }

    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'invalid taste type'});       
    }
});


module.exports = router;