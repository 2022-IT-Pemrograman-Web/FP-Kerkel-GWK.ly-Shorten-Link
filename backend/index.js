const express = require("express");
const cors = require("cors");
// const app = express();
const db = require("./firestore");
const short_collection = db.collection("shorten_test");

// import { getFirestore, query, collection, doc, onSnapshot, addDoc, deleteDoc, updateDoc, where, connectFirestoreEmulator, increment, getDocs, getDoc } from "firebase/firestore";
// import { adminAuth } from "../config/database.js"
// import { db } from "./firestore.js"
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import express from 'express'

const app = express()



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
      // .where("short", "==", short_params)
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
  const real = req.body.full
  const random = req.body.random_link
  console.log(real, random)
    try{
        short_collection.add({
          full : real,
          short : random,
            // short:req.body.short,
            // full:req.body.full
        })
        res.send({
            message: "Data telah ditambahkan."
        })
    }
    catch (error){
        console.log(error)
    }
})

app.put("/edit", async (req, res) => {  
const new_real_link = req.body.new_real_link
const id = req.body.id
const docRef = doc(db, "shorten_test", id)

try {
  await updateDoc(docRef, {
    full: new_real_link
  })
  res.send({ message: "Succesfully edited" })
  }
  catch (err) {
      console.log(err)
      res.send(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.post("/api/update", async (req, res) => {

//   const newCustomPath = req.body.newCustomPath
//   const newRealLink = req.body.newRealLink
//   const id = req.body.id
//   const docRef = doc(db, "links", id)

//   try {
//       await updateDoc(docRef, {
//           customPath: "http://sew.ey:5173/" + newCustomPath,
//           realLink: newRealLink
//       })
//       res.send({ message: "Succesfully edited" })
//   }
//   catch (err) {
//       console.log(err)
//       res.send(err)
//   }
// })
