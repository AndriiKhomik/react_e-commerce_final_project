const Author = require("../models/Author");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addAuthor = (req, res, next) => {
  const AuthorData = _.cloneDeep(req.body);
  AuthorData.customer = req.user.id;
  const newAuthor = new Author(queryCreator(AuthorData));

  newAuthor
    .save()
    .then(author => res.json(author))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};


exports.getAuthors = (req, res, next) => {
  Author.find()
    .then(authors => res.status(200).json(authors))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};



exports.getAuthorById = (req, res, next) => {
  Product.findOne({
    author: req.params.authorId
  })
    .then(author => {
      if (!author) {
        res.status(400).json({
          message: `Author with id ${req.params.id} is not found`
        });
      } else {
        res.json(author);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};