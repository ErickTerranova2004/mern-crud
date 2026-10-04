const stringCapitalizeName = require('string-capitalize-name');

// Sanitization functions
const sanitizers = {
  name: (name) => stringCapitalizeName(name),
  email: (email) => email.toLowerCase(),
  age: (age) => {
    if (age === '') return '';
    if (isNaN(age)) return '';
    return parseInt(age);
  },
  gender: (gender) => (gender === 'm' || gender === 'f') ? gender : ''
};

// Validation helper
const validateAge = (age) => {
  if (age === '') return null;
  if (age < 5) return 'You\'re too young for this.';
  if (age > 130) return 'You\'re too old for this.';
  return null;
};

// Sanitize request body
const sanitizeUser = (body) => ({
  name: sanitizers.name(body.name || ''),
  email: sanitizers.email(body.email || ''),
  age: sanitizers.age(body.age),
  gender: sanitizers.gender(body.gender || '')
});

module.exports = { sanitizers, validateAge, sanitizeUser };
