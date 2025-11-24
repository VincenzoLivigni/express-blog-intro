const express = require("express");
const app = express();
const port = 3000;                                                      // il server resta in ascolto sulla porta "3000"


app.get("/", (req, res) => {                                            // "/" -> rotta principale
    res.send("<h1>Server del mio blog</h1>");                           // contenuto HTML in risposta postman
});


app.listen(port, () => {                                                // Avvio il server e metto in ascolto su "porta 3000"
    console.log(`Example app ${port}`);                                 // come risposta nel terminale -> "Example app 3000"
});