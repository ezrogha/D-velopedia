const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = (data) =>  {
  let errors = {}

  data.text = !isEmpty(data.text) ? data.text : ""
  data.password = !isEmpty(data.password) ? data.password : ""

  if(Validator.isEmpty(data.text, {ignore_whitespace:false })) {
    errors.name = 'Post is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
