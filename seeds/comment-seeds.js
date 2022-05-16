const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is amazing!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Wow, amazing work!"
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;