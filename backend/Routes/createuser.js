const express = require ("express")
const router = express.Router()
const User = require ('../models/User') 
const { body, validationResult } = require('express-validator');

router.post ("/createuser",[
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','Incorrect Password').isLength({ min: 5 })]
,async(req,res)=>{
    //validation function (proper checks for all validations )
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        })
        res.json({sucess:true});

    }
    catch (error)
    {
        console.log(error);
        res.json({sucess:false});
    }
})

module.exports=router;