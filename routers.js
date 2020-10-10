const express = require('express');
const router = express.Router();
const attendanceRouter = require('./attendance/router.v1');

router.use('/attendance', checkAccess, attendanceRouter);



function checkAccess(req, res, next) {
    if (req.user.role == 'Teacher') {
        next();
    }
    else {
        res.send("You do not have access");
    }
}
module.exports = router;