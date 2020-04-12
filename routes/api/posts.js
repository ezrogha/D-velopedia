const express = require('express')
const router = express.Router()
const passport = require('passport')
const Post = require('../../models/Post')

// Validation
const validatePostInput = require('../../validation/post')



// @route  GET api/posts/test
// @desc   Test posts endpoint
// access  Public
router.get('/test', (req, res) => res.json({ msg: "Posts work" }))



// @route  GET api/posts/
// @desc   Get posts
// @access  Public
router.get('/', (req, res) => {
  Post.find()
  .sort({ date: 'asc' })
  .then(posts => res.json(posts))
  .catch(err => res.status(404).json({ noposts: "No posts found" }))
})



// @route  GET api/posts/:id
// @desc   Get a post
// @access  Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(404).json({ nopost: "No post found by that id" }))
})



// @route  POST api/posts/
// @desc   Create a post
// access  Private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  const { isValid, errors } = validatePostInput(req.body)
  if(!isValid) {
    return res.status(404).json(errors)
  }
  const { text, name, avatar } = req.body
  const { id } = req.user
  const newPost = new Post({
    user: id,
    text,
    name,
    avatar
  })

  newPost.save().then(post => {
    return res.json(post)
  })
})



// @route  DELETE api/posts/:id
// @desc   Delete a post
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if(post.user.toString() !== req.user.id){
        return res.status(401).json({ unauthorized: 'No permision to delete this post' })
      }
      post.delete().then(() => res.json({ success: true }))
    })
    .catch(err => res.status(404).json({ nopost: "No post found by that id" }))
})



// @route  POST api/posts/like/:id
// @desc   Like a post
// @access  Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if(post.likes.filter(user => user.id.toString() === req.user.id).length > 0){
        return res.status(400).json({ alreadyliked: 'you have already liked this post' })
      }
      post.likes.unshift(req.user.id)
      post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({ nopost: "No post found by that id" }))
})



// @route  POST api/posts/unlike/:id
// @desc   Unlike a post
// @access  Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if(post.likes.filter(user => user.id.toString() === req.user.id).length === 0){
        return res.status(400).json({ notliked: "You haven't liked this post yet" })
      }
      
      const removeIndex = post.likes.map(user => user.id.toString()).indexOf(req.user.id)

      post.likes.splice(removeIndex, 1)
      post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({ nopost: "No post found by that id" }))
})



// @route  POST api/posts/comment/:id
// @desc   Add a comment to post
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      const { isValid, errors } = validatePostInput(req.body)
      if(!isValid) {
        return res.status(404).json(errors)
      }

      const { text, name, avatar } = req.body
      const newComment = {
        text,
        name,
        avatar,
        user: req.user.id
      }
      post.comments.unshift(newComment)
      post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({ nopost: "No post found" }))
})



// @route  DELETE api/posts/:id
// @desc   Delete a post
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if(post.comments.filter(user => user.id.toString() === req.params.comment_id).length === 0){
        return res.status(404).json({ nocomment: 'comment does not exist' })
      }
      const removeIndex = post.comments.map(user => user.id.toString()).indexOf(req.params.comment_id)
      console.log(removeIndex)
      post.comments.splice(removeIndex, 1)
      post.save().then(() => res.json({ success: true }))
    })
    .catch(err => res.status(404).json({ nopost: "No post found by that id" }))
})


module.exports = router
