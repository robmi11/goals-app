const asyncHandler = require("express-async-handler");

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all goals" });
});

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Proszę podać nazwę zadania.");
  }
  res.status(201).json({ message: req.body.text });
});

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = req.params.id;
  res.status(200).json({ message: `Goal with id ${goal} has been updated` });
});

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = req.params.id;
  res.status(200).json({ message: `Goal with id ${goal} has been deleted` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
