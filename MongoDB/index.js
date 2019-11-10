const express = require('express');
const app = express();
app.listen(3000, ()=>console.log('listening at 3000'));
app.use(express.static('C:/Users/origa/Documents/GitHub/HackUTD/Flight_Input'));
