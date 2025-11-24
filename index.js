const express = require("express");
const app = express();
const port = 3000;                                                      // il server resta in ascolto sulla porta "3000"

app.use(express.static("Public"));                                      // configuro gli asset statici dalla cartella "Public"


const posts = [{                                                        // array di post
    titolo: "post numero uno",
    contenuto: "contenuto del primo post",
    img: "/images/ciambellone.jpeg",
    tags: ["ricetta", "ciambellone"]
},
{
    titolo: "post numero due",
    contenuto: "contenuto del secondo post",
    img: "/images/cracker_barbabietola.jpeg",
    tags: ["cracker", "barbabietola"]
},
{
    titolo: "post numero tre",
    contenuto: "contenuto del terzo post",
    img: "/images/pane_fritto_dolce.jpeg",
    tags: ["pane", "fritto", "dolce"]
},
{
    titolo: "post numero quattro",
    contenuto: "contenuto del quarto post",
    img: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"]
},
{
    titolo: "post numero cinque",
    contenuto: "contenuto quinto post",
    img: "/images/torta_paesana.jpeg",
    tags: ["torta", "dolce"]
}
]

app.get("/bacheca", (req, res) => {                                     // "/" -> rotta principale  -- creo la rotta "bacheca"
    res.json(posts);                                                    // contenuto HTML in risposta postman --  res.json() -> invia i dati sotto forma di json
});


app.listen(port, () => {                                                // Avvio il server e metto in ascolto su "porta 3000"
    console.log(`Example app ${port}`);                                 // come risposta nel terminale -> "Example app 3000"
});