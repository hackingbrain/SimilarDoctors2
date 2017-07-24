const express = require('express');
const router = express.Router();
const doctorService = require('../services/doctorService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// GET /api/v1/doctors
router.get('/doctors', function(req, res){
    doctorService.getDoctors()
        .then(doctors => res.json(doctors));
        
});


// GET /api/v1/doctors/:id
router.get('/doctors/:id', function(req, res){
    const id = req.params.id;

    // doctorService.getDoctor(+id)
    //     .then(doctor => res.json(doctor));
    // doctorService.getSimilar(+id)
    //     .then(doctors => res.json(doctors));
    // const sp =  doctorService.getDoctor(+id)
    //     .then(doctors => res.json(doctors.specialty));

    doctorService.combine(+id)
        .then(doctors => res.json(doctors));
});

// POST /api/v1/doctors
router.post('/doctors', jsonParser, function(req, res){
    doctorService.addDoctor(req.body)
        .then(function(doctor){
            res.json(doctor);
        }, function(error) {
            res.status(400).send('already exist');
        });
});



module.exports = router;