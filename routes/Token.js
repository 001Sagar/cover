const express = require('express');

const router  = express.Router();

const userAPI = require('../controllers/token');

router.post('/make',userAPI.createsession);

module.exports = router;