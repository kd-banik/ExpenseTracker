const express = require("express"),
    db = require("../db/db_index"),
    router = express.Router();

router.get("/blog_details", async (req, res, next) => {
    // res.writeHead(200, {"contentType":"text/json"});
    try {
        let results = await db.all();
        res.json(results);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
    res.end();
});

router.get("/blog_details/:id", async (req, res, next) => {
    // res.writeHead(200, {"contentType":"text/json"});
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
    res.end();
});


module.exports = router;

//routes for insert, update and delete
// router.put(){} - used for update
// router.delete(){} - used for delete
// router.post(){} - used for creating posts