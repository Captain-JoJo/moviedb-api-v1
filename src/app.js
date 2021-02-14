const express = require('express')
const app = express()
const getItemDataRoute = require('./routes/get-data')
const port = process.env.PORT || 5000

app.use(getItemDataRoute)

app.listen(port, () => {
    console.log(`Inventory app listening at ${port}`);
})