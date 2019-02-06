require('dotenv').config({path: __dirname + '/.env'})
const app = require('express')()
const stripe = require('stripe')(process.env.STRIPE_SECRET)

app.use(require('body-parser').json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/charge', async (req, res) => {
  try {
    const status = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      description: req.body.description,
      source: req.body.token
    })

    res.json(status)
  } catch (err) {
    console.error('Error:', err)
    res.status(500).end()
  }
})

app.listen(9000, () => console.log('Listening on port 9000'))
