const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = (data) =>  {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""

  if(!Validator.isEmail(data.email)) {
    errors.name = 'Email is not valid'
  }

  if(Validator.isEmpty(data.email, {ignore_whitespace:false })) {
    errors.name = 'Email is required'
  }

  
  if(Validator.isEmpty(data.password, {ignore_whitespace:false })) {
    errors.password = 'Pasword is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}