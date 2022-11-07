const express = require('express'); 
const fs = require('fs');

const app = express(); 
const bigphoto = require('./photoRouter');

app.use(express.json());
app.use('/', express.static('public'));
app.use('/photos', bigphoto);

app.get('/catalogData', (req, res) => { 
    fs.readFile('server/db/photos.json','utf8', (err, data)=> {
        if(err){
            console.log('Error');
        } else {
            res.send(data);
        }
        }); 
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000!'); 
});