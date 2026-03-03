const express = require('express')
const router = express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res)=>{

    try {   
    const data = req.body 
    const newPerson = new Person(data);
    const responce = await newPerson.save();
    console.log("data saved");
    res.status(200).json(responce)
    
    } catch (err) {
        console.log(err);
        res.status(500). json({error: 'internal error'})
    }
    
});


router.get('/', async (req, res)=>{
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data)

    } catch (err) {
         console.log(err);
        res.status(500). json({error: 'internal error'})
    }
});



router.get('/:workType', async (req, res)=>{
    const workType = req.params.workType;
    try {
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            
            const responce = await Person.find({work: workType});
            console.log('responce fetched');
            res.status(200).json(responce);

        } else{
            res.status(404).json({error: 'invalid work type'})
        }

    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'invalid work type'});       
    }
});

router.put('/:id', async (req, res)=>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const responce = await Person.findByIdAndUpdate(personId, updatedPersonData,{
           returnDocument: 'after', // return updated document
            runValidators: true //run mongoose validation
        });
        
        if(!updatedPersonData){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(responce);
        

    } catch (err) {
        console.log(err);
        res.status(200).json({error: 'Internal Server Error'});
    }
})


router.delete('/:id', async (req, res)=>{
    try {
        const personId = req.params.id;

        const responce = await Person.findByIdAndDelete(personId);

         if(!personId){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({massege: "Deleted Succefully"});
    } catch (err) {
         console.log(err);
        res.status(200).json({error: 'Internal Server Error'});
    }
})


module.exports = router;