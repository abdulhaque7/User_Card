const Team = require('../models/team');

// Create a new team
const createTeam = async (req, res) => {
  const { name, users } = req.body;

  try {
    const newTeam = new Team({ name, users });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Retrieve the details of a specific team by ID
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('users');
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTeam,
  getTeamById
};
