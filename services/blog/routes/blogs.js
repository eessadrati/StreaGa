const router = require('express').Router();
const Blog = require('../models/Blog');

//create a new blog
router.post('/', (req, res) => {
   const blog = new Blog(req.body);
    blog.save()
        .then((b) =>res.status(201).json({
                                    message: 'Blog created successfully',
                                    blog:b,
                    }))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));

});

//get blog by id
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.status(404).json({ notfound: 'No blog found' }));
});

//update blog
router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(blog => res.json(blog))
        .catch(err => res.status(404).json({ error: 'No blog found' }));
    //update blog by id and send back updated blog
});

//delete blog
router.delete('/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: 'Blog deleted' }))
        .catch(err => res.status(404).json({ error: 'No blog found' }));
});

//get all blogs
router.get('/', (req, res) => {
    //get all blogs and sort them by createdAt date in descending order
   
    Blog.find().sort({ createdAt: -1 })
        .then(blogs => res.json(blogs))
        .catch(err => res.status(404).json({ notfound: 'No blogs found' }));
});








//export default router;
module.exports = router;