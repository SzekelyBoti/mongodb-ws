const express = require("express");
const router = express.Router();
const query = require("../db/queries/feedback.query");

router.get("/", async (req, res) => {
  try {
    const allFeedbacks = await query.getFeedbacks();
    res.json(allFeedbacks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/summary/:langid", async (req, res) => {
  try {
    const langid = parseInt(req.params.langid);
    const languageFeedback = await query.getFeedbacksByLangId(langid);
    const upvotes = languageFeedback.filter((fb) => fb.vote === 1).length;
    const downvotes = languageFeedback.filter((fb) => fb.vote === -1).length;
    res.json({ upvotes, downvotes });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.post("/vote/:langid", async (req, res) => {
  try {
    const vote = req.body.vote;
    const langid = parseInt(req.params.langid);
    await query.createFeedback({ langid, vote });
    res.json({
      msg: `Vote ${vote} was added to language with ID ${langid}`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
