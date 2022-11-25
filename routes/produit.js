const express = require("express");
const Produit = require("../models/produit");

// initialisation
const ProduitRouter = express.Router();
ProduitRouter.get("/all", async (req, res) => {
  try {
    let result = await Produit.find();
    res.send({ result, msg: " All Shipping Order" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
ProduitRouter.post("/add", async (req, res) => {
    try {
      let newProduit = new Produit(req.body);
      let result = await newProduit.save();
      res.send({ result, msg: "sucefuly aded" });
      console.log(result);
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  });

ProduitRouter.delete('/delete/:id', async (req, res) => {
  try {
    let result = await Produit.findByIdAndRemove( req.params.id);
    res.send({ msg: " delete Shipping Order" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// router.delete('/delete/:id',async (req,res) => {
//   try {
//       const result = await Annonce.findByIdAndDelete({ _id: req.params.id,});
//       res.send({msg:"annonce deleted successfully"})
//   } catch (error) {
//       console.log(error);
//       res.status(500).send({ msg: "can not delete the annonce"})
      
//   }
// })



ProduitRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Produit.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: { ...req.body } }
      );

      res.send({ msg: " Order updated.." });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });

module.exports = ProduitRouter;