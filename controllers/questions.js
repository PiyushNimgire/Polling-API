const Question = require('../models/question');
const Option = require('../models/option');

// controller function to get specific question
const getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json({question});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

// controller function to create question
const createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json({question});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

// controller function to delete question
const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndRemove(req.params.id);
        await Option.deleteMany({question:req.params.id});
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}



module.exports = {
    getQuestion,
    createQuestion,
    deleteQuestion
};