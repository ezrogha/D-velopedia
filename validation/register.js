const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = (data) =>  {
  let errors = {}

  // Initialize
  data.name = !isEmpty(data.name) ? data.name : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""

  if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name should be between 2 and 30 characters'
  }

  if(Validator.isEmpty(data.name, {ignore_whitespace:false })) {
    errors.name = 'Name is required'
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid'
  }

  if(Validator.isEmpty(data.email, {ignore_whitespace:false })) {
    errors.email = 'Email is required'
  }

  if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password should be between 6 and 30 characters'
  }

  if(Validator.isEmpty(data.password, {ignore_whitespace:false })) {
    errors.password = 'Pasword is required'
  }

  if(Validator.isEmpty(data.password2, {ignore_whitespace:false })) {
    errors.password2 = 'Confirm Pasword is required'
  }

  if(!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Paswords are do not match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}