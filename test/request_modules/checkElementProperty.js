function checkElementProperty (){
    expect(element).to.be.an('object');
    expect(element).to.have.property('email').that.to.match(/[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]/, 'Problems with email');
    expect(element).to.have.property('username').that.to.not.be.empty;
}

module.exports = checkElementProperty;