const FeedbackModel = require("../model/feedback.model");


async function getFeedbacks() {
    // TASK 8
}

async function getFeedbacksByLangId(langid) {
    // TASK 10
    return await FeedbackModel.find({ langid });
}

async function createFeedback(feedback) {
    // TASK 9
}

module.exports = {
    getFeedbacks,
    getFeedbacksByLangId,
    createFeedback
}