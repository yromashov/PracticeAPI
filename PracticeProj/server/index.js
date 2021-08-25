const express = require('express');
const path = require('path');
const app = express();
const PORT = 1337;
const cors=require('cors')

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors())

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
