let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let user  = require ("../data/user");
let alluser  = require ("../data/alluser");
let userHistory = require ("../data/userHistory");


//console.log("hii");
router.get("/Claim_id/:Claim_id",user.record);
router.get("/all",alluser.record);
router.get("/userHistory",userHistory.record);
module.exports = router;


