const express = require('express');
const app = express();
const router = express.Router();
const Order = require('../models/orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.orderData;
    data.splice(0, 0, { orderDate: req.body.orderDate });
    
    try {
        let emailid = await Order.findOne({ email: req.body.email });

        if (emailid === null) {
            await Order.create({
                email: req.body.email,
                orderData: data
            });
            res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { orderData: data } }
            );
            res.json({ success: true });
        }
    } catch (err) {
        console.error('Server Error', err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
