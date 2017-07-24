// let doctors = [
// {
//     id: 1,
//     name: "Johnson Smith",
//     specialty: "Acupuncture",
//     area: "Seattle, Washington",
//     reviewScore: 5.0
// },
//     {
//         id: 2,
//         name: "Raza Black",
//         specialty: "Internal Medicine",
//         area: "Oakland, California",
//         reviewScore: 5.0
//     },
//     {
//         id: 3,
//         name: "Zack Hong",
//         specialty: "Naturopathy",
//         area: "San Mateo, California",
//         reviewScore: 2.0
//     },
//     {
//         id: 4,
//         name: "Kavita Wei",
//         specialty: "Infectious Disease",
//         area: "Palo Alto, California",
//         reviewScore: 5.0
//     },
//     {
//         id: 5,
//         name: "Elwin Bustos",
//         specialty: "Chiropractic",
//         area: "San Jose, California",
//         reviewScore: 4.0
//     },
//     {
//         id: 6,
//         name: "Amir Jundi",
//         specialty: "Cardiology",
//         area: "Pleasanto, California",
//         reviewScore: 3.0
//     },
//     {
//         id: 7,
//         name: "Mandy Wang",
//         specialty: "Anesthesiology",
//         area: "Buffalo, New York",
//         reviewScore: 5.0
//     },
//     {
//         id: 8,
//         name: "Jon Wong",
//         specialty: "Hepatology",
//         area: "Syracuse, New York",
//         reviewScore: 5.0
//     },
//     {
//         id: 9,
//         name: "Angel Zong",
//         specialty: "Diagnostic Radiology",
//         area: "Ithaca, New York",
//         reviewScore: 2.0
//     },
//     {
//         id: 10,
//         name: "Vivian Chow",
//         specialty: "Endocrinology",
//         area: "Rochester, New York",
//         reviewScore: 5.0
//     },
//     {
//         id: 11,
//         name: "Appa Prada",
//         specialty: "Hematology",
//         area: "Pittsburgh, Pennsylvania",
//         reviewScore: 4.0
//     },
//     {
//         id: 12,
//         name: "Jennifer Smith",
//         specialty: "Nephrology",
//         area: "Richmond, Virginia",
//         reviewScore: 3.0
//     },
//     {
//         id: 13,
//         name: "Christine Shin",
//         specialty: "Internal Medicine",
//         area: "Oakland, California",
//         reviewScore: 5.0
//     },
//     {
//         id: 14,
//         name: "Sally Dan",
//         specialty: "Internal Medicine",
//         area: "Oakland, California",
//         reviewScore: 3.0
//     }

// ];

const DoctorModel = require('../models/doctorModel');

const getDoctors = function () {
    // return new Promise((resolve, reject) =>{
    //     resolve(doctors);
    // });

    return new Promise((resolve, reject) => {
        DoctorModel.find({}, function (err, doctors) {
            if (err) {
                reject(err);
            } else {
                resolve(doctors);
            }
        });
    });
}

const getDoctor = function (id) {
    // return new Promise((resolve, reject) =>{
    //     resolve(doctors.find(doctor => doctor.id === id));
    // });
    return new Promise((resolve, reject) => {
        DoctorModel.findOne({ id: id }, function (err, doctor) {
            if (err) {
                reject(err);
            } else {
                resolve(doctor);
            }
        });
    })

};

const getSimilar = function (id) {
    specialty = doctors.find(doctor => doctor.id === id).specialty;
    name = doctors.find(doctor => doctor.id === id).name;
    return new Promise((resolve, reject) => {
        resolve(doctors.filter((doctor) => doctor.specialty === specialty && doctor.name !== name));
    })
}

const combine = function (id) {
    return new Promise((resolve, reject) => {
        DoctorModel.findOne({ id: id }, function (err, target) {
            if (err) {
                reject(err);
            } else {
                DoctorModel.find({ specialty: target.specialty }, function (err, doctor) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(doctor);
                    }
                })
            }
        })
    })
}


const addDoctor = function (newDoctor) {

    return new Promise((resolve, reject) => {
        DoctorModel.findOne({ name: newDoctor.name }, function (err, data) {
            if (data) {
                reject('already exists');
            } else {
                DoctorModel.count({}, function (err, num) {
                    newDoctor.id = num + 1;
                    let mongoDoctor = new DoctorModel(newDoctor);
                    mongoDoctor.save();
                    resolve(mongoDoctor);
                });
            }
        });
    })
}



module.exports = {
    getDoctors,
    getDoctor,
    //   getSimilar,
    addDoctor,
    combine
}