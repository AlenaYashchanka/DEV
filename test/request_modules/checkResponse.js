var expect = require('chai').expect;

function checkResponse (){
    expect(response.statusCode).to.equal(200, 'Something wrong! Status code is not 200!'); 
    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
}

module.exports = checkResponse;