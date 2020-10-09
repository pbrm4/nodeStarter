const express = require('express');
const router = express.Router();


router.get('/add', addNumbers)

function addNumbers(req, res, next) {
    let num1 = Number(req.query.number1);
    let num2 = Number(req.query.number2);
    res.send(`Sum of ${num1} and ${num2} = ${num1 + num2}`);
}

router.post('/addAttendance', insertAttendance)

function insertAttendance(req, res, next) {
    try {
        if (req.body.status) {
            console.log("It is true");
        }

        //Do some insert operations in db, maybe analysis.
        res.send({ success: true, msg: "Attendance added successfully" });
    } catch (err) {
        console.log(err);
        res.send({ success: false, msg: "Errored" });
    }
}

module.exports = router;