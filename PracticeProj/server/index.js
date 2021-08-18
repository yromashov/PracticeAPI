const express = require('express');
const path=require('path')
const app = express();
const PORT = 1337;


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


