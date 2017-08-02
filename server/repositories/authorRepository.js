'use strict'
const mongoose = require('mongoose');
const Author = require('../models/Author'); 


class AuthorRepository{

    async getAll()
    {
        const authors = await Author.find();

        return authors;
        
    }
    
    async addNew(body){
        const author = await (new Author(body)).save();
        console.log(author);
        return author;
    }
}

module.exports = new AuthorRepository();