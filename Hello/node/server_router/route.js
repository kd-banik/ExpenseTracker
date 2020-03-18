const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const userData = require('../sqlQuery');

router.get("/approval",userData.approval);

module.exports = router;