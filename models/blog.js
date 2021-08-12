// this is the schema for the blog model.
// this page displays how the output shhould come

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        reqired: true
    },

    snippet: {
        type: String,
        requried: true
    },

   body:{
       type: String,
       required: true
   }

}, {timestamps: true});



const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;