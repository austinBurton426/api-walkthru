const express = require('express');
const MongoClient = require('mongodb')
const app = express();
const port = 4000;
// const breakfast = {
//     eggs: 'scrambled',
//     bacon: 'chewy',
//     toast: 'sour dough'
// }

const url="mongodb+srv://Bib92:8095762@chucky-gtnbt.mongodb.net/Meeeeeels?retryWrites=true&w=majority";
const dbName = "Meeeeeels";
const collection = "Breakfast";

app.get("/bacon",(req,res)=> {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) throw err
        const db = client.db(dbName);
        db.collection(collection).find().toArray((err, result) => {
            if (err) throw err
            res.send(result)

        })
    })
});

app.listen(port, () => console.log(`serving breakfast at port:${port}`));