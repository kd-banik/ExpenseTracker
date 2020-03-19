const express = require("express");
const db = require("../db/db_index");
const router = express.Router();

router.get("/", async (req, res, next) => {
    // res.json({test : "test"});
    try {
        let results = await db.all();
        res.json(results);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
});

module.exports = router;