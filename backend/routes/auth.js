const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateAuth } = require("../utils/validate");

router.post("/register", async (req,res)=>{
  const { error } = validateAuth(req.body);
  if(error) return res.status(400).json({msg:error.message});

  const hash = await bcrypt.hash(req.body.password,10);
  await User.create({ email:req.body.email, password:hash });

  res.json({msg:"Registered"});
});

router.post("/login", async (req,res)=>{
  const { error } = validateAuth(req.body);
  if(error) return res.status(400).json({msg:error.message});

  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(400).json({msg:"User not found"});

  const match = await bcrypt.compare(req.body.password,user.password);
  if(!match) return res.status(400).json({msg:"Wrong password"});

  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);

  res.json({token});
});

module.exports = router;