// ... call to require('express') ...
const { check, validationResult } = require('express-validator');
// ... leave the rest untouched ...
// ... require statements ...
// ... router.get ...
let express = require("express");
//var validator = require('express-validator');
let router = express.Router();

router.post('/', [
    check('fname').not().isEmpty().isLength({ min: 3 }).withMessage('Name must have more than 3 characters'),
    check('lname').not().isEmpty().isLength({ min: 3 }).withMessage('Name must have more than 3 characters'),
    //check('email', 'Your email is not valid').not().isEmpty(),
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
    check('designation').not().isEmpty().withMessage('Name must have some value'),
    //check('password', 'Your password must be at least 5 characters').not().isEmpty(),
    // ... leave other validations untouched ...
    //check('name').not().isEmpty().isLength({ min: 5 }).withMessage('Name must have more than 5 characters'),
    check('password', 'Your password must be at least 5 characters').not().isEmpty().isLength({ min: 5 }),
    // ... leave other validations untouched ...
    check('password1', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),

],
    function (req, res, next) {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        } else {
            res.send({});
        }
        next();
    });

module.exports = router;