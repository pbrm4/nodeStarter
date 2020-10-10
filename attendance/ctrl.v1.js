exports.getAttendance = getAttendance;
exports.insertAttendance = insertAttendance;

function getAttendance(req, res, next) {
    res.send({ msg: "To be built yet. Coders are resting" });
}

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