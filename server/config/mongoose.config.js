const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/nlangione-solo-project", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database nlangione-solo-project"))
    .catch((err) =>
        console.log("Something went wrong when connecting to the database nlangione-solo-project", err)
    );
