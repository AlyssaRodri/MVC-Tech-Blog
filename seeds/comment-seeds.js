const { Comments } = require('../models');

const commentData = [
    {
        id: 1,
        user_id: 2,
        blog_id: 1,
        comment_text: "This is amazing!"
    },
    {
        id: 2,
        user_id: 1,
        blog_id: 2,
        comment_text: "I am too!"
    },

]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;