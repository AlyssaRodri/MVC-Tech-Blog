const { Post } = require('../models');

const postData = [
    {
        title: "Alyssa's Tech Blog Launches",
        post_content: "Hi everyone! I am so excited to finally have a space where I can freely share my opinions of the latest and greatest technology.",
        user_id: 3
    },
    {
        title: "React-Query",
        post_content: "Has anyone been able to use react query yet? While it is very powerful I am encountering a steep learning curve!",
        user_id: 1
    },
    {
        title: "What language should I learn next?",
        post_content: "Thanks to my bootcamp I have been working in the last three months in Javascript and was wondering what I should learn next! Does anyone have suggestions?",
        user_id: 2

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
