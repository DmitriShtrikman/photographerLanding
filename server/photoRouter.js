const express = require('express'); 
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('server/db/bigphoto.json', 'utf-8', (err, data) => {
        if(err){
            console.log(error);
        } else {
            res.send(data);
        }
    })
});

module.exports = router;