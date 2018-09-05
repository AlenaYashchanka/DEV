var expect = require('chai').expect;

function checkBody (number){
    expect(JSON.parse(body)).to.be.an('array');
    expect(JSON.parse(body).length).to.equal(number, `Total count of users is NOT ${number}`); 
}

module.exports = checkBody;