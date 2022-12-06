const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./firestore");
const short_collection = db.collection("shorten_test");

app.use(express.json());
app.use(cors());

const port = 3000;

// app.get("/", function(req, res){})
app.get("/", (req, res) => {
  res.send("OKEH!");
});

app.get("/shorts", (req, res) => {
  let shorts = [];

  try {
    short_collection
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        const data = doc.data();
        // const short = data.short
        // const full = data.full
        shorts.push({
          id: doc.id,
          short: data.short,
          full: data.full,
        });
      });
      res.send(shorts);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.get("/shorts/:short", (req, res) => {
  const short_params = req.params.short;
//   const {short} = req.params;
  let shorts = [];
  try {
    short_collection
      .where("short", "==", short_params)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          shorts.push({
            id: doc.id,
            short: data.short,
            full: data.full,
          });
        });

        res.send(shorts);
        // res.send("halo")
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/shorts/:id", (req, res) => {
    const id_params = req.params.id;

    try{
        short_collection.doc(id_params).delete().then(()=>{
            res.send({
                message: "Data telah dihapus."
            })
        })
    }
    catch (error){
        console.log(error)
    }
})

app.post("/shorts/", (req, res) => {
    try{
        short_collection.add({
            short:req.body.short,
            full:req.body.full
        })
        res.send({
            message: "Data telah ditambahkan."
        })
    }
    catch (error){
        console.log(error)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
