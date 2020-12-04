// npm install --save-dev mocha chai

const expect=require('chai').expect;

it('3+3 is 6', function(){ // from mocha
    const num1=3;
    const num2=3;
    expect(num1+num2).to.equal(6); // chai
})