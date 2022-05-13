const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blogs, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

// get /dashboard
router.get('/', withAuth, (req, res) => {
  console.log("dashboard")
    Blogs.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'date_created',
      ],
      include: [
        {
          model: Comments,
          attributes: ["id", "comment_text", "blog_id", "user_id", ],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbBlogData => {
        // serialize data before passing to template
        const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
        res.render('dashboard', { blogs, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //Routing for the editing of blog
  router.get('/edit/:id', withAuth, (req, res) => {
    Blogs.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'date_created',
        'body',
      ],
      include: [
        {
          model: Comments,
          attributes: ["id", "comment_text", "blog_id", "user_id", ],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found with this id' });
          return;
        }
  
        // serialize the data
        const blog = dbBlogData.get({ plain: true });

        res.render('edit-blog', {
            blog,
            loggedIn: true
            });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/create/', withAuth, (req, res) => {
    Blogs.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'date_created',
        'body',
        'image_url'
      ],
      include: [
        {
          model: Comments,
          attributes: ["id", "comment_text", "blog_id", "user_id", ],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const blogs = dbPostData.map(blog => blog.get({ plain: true }));
        res.render('create-blog', { blogs, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;