const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Joi = require('joi');

app.use( express.json() )

const items = [
    {id: 1, patient: 'Alex', address:"1 Pen Station", hospital:'Mount Sinai',date:"1/1/2023",amount:"100"},
    {id: 2, patient: 'Brendan',address:"2 Pen Station", hospital:'Queen',date:"1/2/2023",amount:"200"},
    {id: 3, patient: 'Chris',address:"3 Pen Station", hospital:'Mount Sinai',date:"1/3/2023",amount:"300"},
]

app.listen(
    PORT, 
    () => console.log(`Listening on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.send('Hello Truffle Health!');
});
app.get('/api/items', (req, res) => {
    res.status(200).send(items)
});

app.post('/api/items', (req, res) => {
    const schema = {
        patient: Joi.string().required(),
        address: Joi.string().required(),
        hospital: Joi.string().min(5).required(),
        date: Joi.date().required(),
        amount: Joi.number().integer(),
    }

    const result = Joi.validate(req.body, schema);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const bill = {
        id: items.length + 1,
        patient: req.body.patient,
        address: req.body.address,
        hospital: req.body.hospital,
        date: req.body.date,
        amount: req.body.amount
    };

    items.push(bill)
    res.send(bill);
})




