const mongoose = require('mongoose');
const DoctorSchema = mongoose.Schema({
    id: Number,
    name: String,
    specialty: String,
    area: String,
    reviewScore: Number

});

const DoctorModel = mongoose.model('DoctorModel', DoctorSchema);

module.exports = DoctorModel;