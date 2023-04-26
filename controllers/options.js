const Question = require('../models/question');
const Option = require('../models/option');

// controller function to create option
const createOption = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).lean();
        if(question){
            const option = await Option.create({text: req.body.text, question: question});
            if(option){
                // console.log(option.id);
                const updatedOption = await Option.findByIdAndUpdate(option.id, { $set: { link_to_vote: `http://localhost:8000/options/${option.id}/add_vote` } }, { new: true });
                const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, { $push: { options: option }}, { new: true });
                res.status(201).json({question:updatedQuestion, updated_option:updatedOption});
            }
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

// controller function to delete a option
const deleteOption = async (req, res) => {
    try {
        const option = await Option.findByIdAndRemove(req.params.id).lean();
        const questionId = option.question.toString();
        const question = await Question.findByIdAndUpdate(questionId, { $pull: {options: req.params.id}});
        res.status(200).json(option);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const addVote = async (req, res) => {
    try { 
        const option = await Option.findByIdAndUpdate(req.params.id, { $inc: { votes: 1 } }, { new: true });
        res.status(200).json(option);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {createOption, deleteOption, addVote};