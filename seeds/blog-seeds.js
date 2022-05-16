const { Blogs } = require('../models');

const blogData = [
    {
        title: "My Tech Blog",
        body: "This is my first tech blog! I am so excited to be working with everyone and to finally have a platform in which to share all the knowledge that I have gained.",
        user_id: 1
    },
    {
        title: "React vs Handlebars ",
        body: "When it comes to handlebars, I tend to get a little lost. I am very greatful that we seem to have moved away from them in this industry.",
        user_id: 2
    }
]

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;
