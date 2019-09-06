var express = require("express");
var router = express.Router();
var AdBlog = require("../Models/blogModel");

router.post("/addBlogg", (req, res) => {
    var ab = new AdBlog(req.body);
    ab.save();
    res.status(201).send(ab);
});

router.get("/viewBlog", (req, res) => {
    AdBlog.find({}, (err, data) => {
        res.json({ data });
    });
});




module.exports = router;