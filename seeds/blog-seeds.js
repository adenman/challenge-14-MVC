const { Blog } = require('../models');
const blogdata = [
{
    title: "Music",
    text: "Music is s a great thing",
    date: "9/8/2024"
},
{
    title: "Tech",
    text: "text",
    date: "9/15/2024"
},
{
    title: "Art",
    text: "text",
    date: "7/8/2024"
}
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;