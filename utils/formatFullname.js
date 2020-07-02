module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if (fullName === '') return 'Error';
  if(!firstName || !lastName) return 'Error';
  if(fullName.split(' ').length > 2) return 'Error'
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
};
