const formatFullName = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullName', () =>{

  it('should return correct format string if in "firstname" or "lastname" use different letter sizes', () =>{
    expect(formatFullName('John Doe')).to.equal('John Doe');
    expect(formatFullName('john doe')).to.equal('John Doe');
    expect(formatFullName('JoHn DoE')).to.equal('John Doe');
    expect(formatFullName('johN doE')).to.equal('John Doe');
    expect(formatFullName('joHn dOe')).to.equal('John Doe');
  });

  it('should return error when enter nothing', () =>{
    expect(formatFullName('')).to.equal('Error');
  });

  it('should return error when enter others type "string"',()=>{
    expect(formatFullName(11)).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName(true)).to.equal('Error');
    expect(formatFullName(null)).to.equal('Error');
    expect(formatFullName(undefined)).to.equal('Error');
  });

  it('should return error when enter more string from "firstname" & "lastname"',()=>{
    expect(formatFullName('John hans mark')).to.equal('Error')
  })

  
});
