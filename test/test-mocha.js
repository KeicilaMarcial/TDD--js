const assert = require('assert');
const {add,arrayFunction,obj1,obj2,regex} = require ('../src/teste');
const {sum} = require ('../src/soma');
const chai = require("chai");
const {expect}= require('chai');
const sinon = require("sinon");
const axios = require ('axios').default;
const {bodyTag} = require('../src/html');
const nock = require('nock');

describe('Add  function', ()=>{
    const result = add(1,1);
    it('should add 2 numbers together', ()=>{
        //assert.equal(result,2); 
        expect(result).to.be.equal(2);  
    })
    it('Should not be equal to 7,',()=>{
       // assert.notEqual(result,7);  
       expect(result).not.to.be.equal(7)
    })
});


describe('arrayfunction ',()=>{
    it("Element 3 is included at the array [1, 2, 3,4,5]",()=>{
        const result= arrayFunction([1,2, 3,4,5])
       expect(result).to.include(3);
    })
    it("Element TDD é top is not included at the array [6,7,8,9]",()=>{
        const result= arrayFunction([6,7,8,9])
       expect(result).not.to.be.include("TDD é top");
    })
});

describe('obj1 function', ()=>{
    it('the obj 1 should have the attribute attr1', ()=>{
        const result = obj1({attr1:13})
        expect(result).to.have.a.property('attr1')  
    })
});

describe('obj2 function', ()=>{
    it('the obj 2 should not have the attribute attr1', ()=>{
        const result = obj2({attr1:13})
        expect(result).to.not.have.a.property('attr1')  
    })
});

describe('regex function ', ()=>{
    const r =regex(/([Invesstools])/)
    it("should match string 1",()=>{
        var s1 ="Não existe concorrente com a investtools para a melhor empresa para se estagiar."
        expect(s1).to.match(r,'nooo why fail??')
    })
    it("should match string 2",()=>{
        var s2 = "Investtools cuida melhor dos seus estagiários que a bloomberg"
        expect(s2).to.match(r,'nooo why fail??')
    })
    it("should match string 3",()=>{
        var s3 = "Somos parte do Programa de Formação da Investtools."
        expect(s3).to.match(r,'nooo why fail??')
    })
});

describe('sum  function', ()=>{
    it('should add 2 numbers together', ()=>{
        const n1 = sum(1,1)
        const n2 = sum(2,2)
        const n3 = sum(4,5)
        const n4 = sum(6,7)
        const n5 = sum(9,9)
        expect(n1).to.be.equal(2);  
        expect(n2).to.be.equal(4); 
        expect(n3).to.be.equal(9);   
        expect(n4).to.be.equal(13);  
        expect(n5).to.be.equal(18);  
    })
});

describe('Body tag', () => {
    it('should have <body>tag',async () => {
        nock('https://www.google.com/')
            .get('/')
            .reply(200, "<html><head></head><body></body></html>")
         expect( await bodyTag()).match(/<body>/)
       
    })
})

