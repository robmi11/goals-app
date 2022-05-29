const getGoals = (req, res) => {
  res.status(200).json({ message: "Get all goals" });
};

const createGoal = (req, res) => {
  res.status(201).json({ message: "Goal created" });
};

const updateGoal = (req, res) => {
  const goal = req.params.id;
  res.status(200).json({ message: `Goal with id ${goal} has been updated` });
};

const deleteGoal = (req, res) => {
  const goal = req.params.id;
  res.status(200).json({ message: `Goal with id ${goal} has been deleted` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
