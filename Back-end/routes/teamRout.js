const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamcontrol');

router.post('/', teamController.createTeam);
router.get('/:id', teamController.getTeamById);

module.exports = router;
