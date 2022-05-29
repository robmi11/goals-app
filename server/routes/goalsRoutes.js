const express = require("express");
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");
const router = express.Router();

router.route("/").get(getGoals).post(createGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
