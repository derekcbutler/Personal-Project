const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    pay: (req, res) => {
        const {payment: {id}, amount} = req.body;
        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: id,
                description: 'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(' successful ', charge)
                    //this is where you'd store card info to a db
                    return res.status(200).send(charge)
                }
            }
        )
    }

}