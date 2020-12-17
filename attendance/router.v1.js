const express = require('express');
const router = express.Router();
const attendanceCtrl = require('./ctrl.v1');

router.get('/', attendanceCtrl.getAttendance);
router.post('/add', attendanceCtrl.insertAttendance);
router.get()

module.exports = router;