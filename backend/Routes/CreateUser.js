const express = require('express');
const app = express();
const router = express.Router();
const User = require('../models/user.js');
const { body, validationResult } = require('express-validator');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const jwtSecret='RLOhkT1DlW ;d3Y568.a:4f1H_dXi;'; 
// Middleware to parse JSON bodies
app.use(express.json());

router.post('/createuser',
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt= await bcrypt.genSalt(10);
    let secpassword= await bcrypt.hash(req.body.password, salt);
    try {
      let user = req.body;
      await User.create({
        name: user.name,
        password: secpassword,
        email: user.email,
        location: user.location
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  }
);
router.post('/loginuser',
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'), async (req, res) => {
    let email = req.body.email;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      const pwdCompare= await bcrypt.compare(req.body.password, user.password);
      if (!pwdCompare) {
        return res.status(400).json({ message: 'Invalid password', error: 'Invalid password' });
      }
      const data={
        userInfo:{
          id:user.id
        }
      }
      const authToken= jwt.sign(data, jwtSecret);
      res.json({ success: true , authToken: authToken });
    }
    catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  })
module.exports = router;
