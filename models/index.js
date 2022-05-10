const User = require("./User");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

User.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Blogs, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comments.belongsTo(User, {
    foreignKey: "user_id"
});

Comments.belongsTo(Blogs, {
    foreignKey: "user_id"
});

Blogs.belongsTo(User, {
    foreignKey: "user_id"
})

Blogs.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

module.exports = { User, Blogs, Comments };