const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} - ${new Date().toTimeString()}`);
});
