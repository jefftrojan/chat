const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const port = 3000;
app.listen(port, () => {
    console.log(`Application server is running on port ${port}`);
});