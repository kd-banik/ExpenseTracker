const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const userData = require('./express1');

router.post("/submit",userData.approval);

module.exports = router;