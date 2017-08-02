'use strict';

const AuthorRepository = require('../../repositories/authorRepository');

class AuthorsController {
  constructor(router){
    router.get('/', this.getAuthors.bind(this));
    router.post('/', this.addAuthor.bind(this));
  }

  getAuthors(req, res){
    
    const authors = AuthorRepository.getAll()
      .then(data =>{
        console.log('authors found...');
        res.json(data);
      }).catch(()=>{
       res.send('No authors in list');
      });

  }

  addAuthor(req, res){
    console.log(req);
    if(req.body)
      {
      const author = AuthorRepository.addNew(req.body);
      //console.log(author);
      res.json(author);
    }
    else
      {
        res.send('body is empty');
      }
  }
}

module.exports = AuthorsController;
