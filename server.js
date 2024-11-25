const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

const users = require('./routes/users');
app.use("/api/", users);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    });