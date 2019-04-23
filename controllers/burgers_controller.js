var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/", function(req,res) {
      burger.insertOne("burger_name",req.body.burger_name,function(data){
          console.log(data);
          res.redirect("/")
      })
     

    });
router.put("/:id", function(req,res) {
    burger.updateOne(req.params.id);
    res.sendStatus(200)
});















module.exports = router;