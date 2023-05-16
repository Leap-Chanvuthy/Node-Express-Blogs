const Blog = require ('../models/blog');

    module.exports.blogs_get = (req, res) => {
        Blog.find().sort ({createdAt : -1})
        .then ((result) => {
            res.render ('index' , {title : 'All Blogs' , blogs : result});
        })
        .catch ((err) =>{
            console.log (err);
        });
    }

    module.exports.blogs_post = (req ,res) =>{
        const blog = new Blog(req.body);
        blog.save()
            .then ((result) =>{
                res.redirect ('/blogs');
            })
            .catch ((err) =>{
                console.log (err);
            })
    }

    module.exports.blogs_create_post = (req , res) =>{
        res.render('create' , {title : 'Create a new blog'});
    }

    module.exports.blogs_id_get = (req , res) =>{
        const id = req.params.id;
        Blog.findById(id)
            .then ((result) =>{
                res.render('details' , {blog : result , title : 'Blog details'});
            })
            .catch ((err) =>{
                console.log (err);
            });
    }

    module.exports.blogs_id_delete = (req , res) =>{
        const id = req.params.id;
        Blog.findByIdAndDelete(id)
        .then ((result) =>{
            res.json({redirect : '/blogs'})
        })
        .catch ((err) =>{
            console.log (err);
        })
    }

    module.exports.about_get = (req , res) =>{
        res.render ('about' , {title : 'About'});
    }