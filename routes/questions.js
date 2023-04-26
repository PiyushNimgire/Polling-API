const express = require('express');
const router = express.Router();

const {
    getQuestion,
    createQuestion,
    deleteQuestion
} = require('../controllers/questions');

const {createOption} = require('../controllers/options');

router.route("/create").post(createQuestion);
router.route("/:id").get(getQuestion);
router.route("/:id/options/create").post(createOption);
router.route("/:id/delete").delete(deleteQuestion);


module.exports = router;