const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middleware/auth');

const FavStory = require('../models/FavStory');
const { listenerCount } = require('../models/Story');
const Story = require('../models/Story');

// @desc    Show fav stories
// @route   GET /fav
router.get('/', ensureAuth, async (req, res) => {
    try {
        const favStories = await FavStory.find({user: req.user.id})
            .populate({path: 'story', populate: 'user'})
            .lean();
            
        const stories = favStories.map((favStory) => (favStory.story));
        stories.sort((a,b) => {
            console.log(a.length);
            return a.length - b.length;
        });

        res.render('stories/fav', {stories});
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
})

// @desc    Add fav story
// @route   POST /fav/:storyId
router.post('/:storyId', ensureAuth, async (req, res) => {
    try {
        await FavStory.create({
            story:  req.params.storyId,
            user: req.user
        });  

        let story = await Story.findById(req.params.storyId).populate('user').lean();
        let isFav = true;
        res.render('stories/show', {story, isFav});
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
})

// @desc    Remove fav story
// @route   DELETE stories/:id
router.delete('/:storyId', ensureAuth, async (req, res) => {
    try {
        await FavStory.remove({story: req.params.storyId});

        let story = await Story.findById(req.params.storyId).populate('user').lean();
        let isFav = false;
        res.render('stories/show', {story, isFav});
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
})

// @desc    Show Fav stories from a user
// @route   GET /fav/user/:userId
router.get('/user/:userId', ensureAuth, async (req, res) => {
    try {
        const favStories = await FavStory.find({ user: req.user.id})
            .populate({path: 'story', populate: 'user'})
            .lean();
        
        const stories =  favStories.map((favStory) => favStory.story)
            .filter((story) => story.user._id == req.params.userId)
        
        stories.sort((a,b) => {
            console.log(a.length);
            return a.length - b.length;
        })

        res.render('stories/fav', {stories});
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
})

module.exports = router;