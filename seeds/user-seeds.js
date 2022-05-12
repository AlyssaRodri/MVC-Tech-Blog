const { User } = require('../models');

const userData = [
    {
        username: "AlyssaR",
        email: "alyssar@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "MollyN",
        email: "mollyn@gmail.com",
        password: "p@ssword2"
    },

]

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers