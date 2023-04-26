const express = require('express');
const router = express.Router();

const {addVote, deleteOption} = require('../controllers/options');

router.route("/:id/add_vote").patch(addVote);
router.route("/:id/delete").delete(deleteOption);


module.exports = router;