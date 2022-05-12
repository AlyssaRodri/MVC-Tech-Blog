const { Post } = require('../models');

const postData = [
    {
        title: "My Tech Blog",
        post_content: "This is my first tech blog! I am so excited to be working with everyone and to finally have a platform in which to share all the knowledge that I have gained.",
        user_id: 1
    },
    {
        title: "React vs Handlebars ",
        post_content: "When it comes to handlebars, I tend to get a little lost. I am very greatful that we seem to have moved away from them in this industry.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
