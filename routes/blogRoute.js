const {Router} = require('express')
const router = Router();
const blogControllers = require('../controllers/blogControllers')

    router.get ('/' , (req , res) => {
        res.redirect ('/blogs');
    });

    // all blogs

    router.get ('/blogs' , blogControllers.blogs_get );

    router.post ('/blogs' , blogControllers.blogs_post)

    router.get('/blogs/create' , blogControllers.blogs_create_post);

    router.get ('/blogs/:id' , blogControllers.blogs_id_get);

   router.delete ('/blogs/:id' , blogControllers.blogs_id_delete);

    router.get ('/about' , (req , res) => {
      
    });

    router.use ((req , res) => {
        res.status(404).render('404' , {title : '404'});
    });

    module.exports = router;
