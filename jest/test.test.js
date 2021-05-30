const teste = require('../src/teste');
const soma =require('../src/soma');
const axios = require ('axios').default;
const bodyTag = require('../src/html');
const nock = require('nock');

describe("Add  function", () => {
    test('adding 1 + 1  should return ', () => {
      expect(teste.add(1, 1)).toBe(2);
    });
    test('Should not be equal to 7,',()=>{ 
      expect(teste.add(1,1)).not.toBe(7);
   })
})

describe('arrayfunction ',()=>{
  test("Element 3 is included at the array [1, 2, 3,4,5]",()=>{
     expect(teste.arrayFunction([1,2, 3,4,5])).toContainEqual(3)
  })
  test("Element TDD é top is not included at the array [6,7,8,9]",()=>{
    expect(teste.arrayFunction ([6,7,8,9])).not.toContainEqual("TDD é top");
  })
});

describe('obj1 function', ()=>{
  test('the obj 1 should have the attribute attr1', ()=>{ 
      expect(teste.obj1({attr1:13})).toHaveProperty('attr1')  
  })

});
describe('obj2 function', ()=>{
  test('the obj 2 should not have the attribute attr1', ()=>{
    expect(teste.obj2({attr3:13})).not.toHaveProperty('attr1')  
  })
});

describe('regex function ', ()=>{
  const r =(/([Invesstools])/)
  test("should match string 1",()=>{
      var s1 ="Não existe concorrente com a investtools para a melhor empresa para se estagiar."
      expect(s1).toMatch(r,'nooo why fail??')
  })
  test("should match string 2",()=>{
      var s2 = "Investtools cuida melhor dos seus estagiários que a bloomberg"
      expect(s2).toMatch(r,'nooo why fail??')
  })
  test("should match string 3",()=>{
      var s3 = "Somos parte do Programa de Formação da Investtools."
      expect(s3).toMatch(r,'nooo why fail??')
  })
});

describe('sum  function', ()=>{
  test('should be 2', ()=>{
      const n1 = soma.sum(1,1)
      expect(n1).toBe(2);   
  })
  test('should be 4', ()=>{
    const n2 = soma.sum(2,2)
    expect(n2).toBe(4);    
  })
  test('should be 9', ()=>{
    const n3 = soma.sum(4,5)
    expect(n3).toBe(9);  
  })
  test('should be 13', ()=>{
    const n4 = soma.sum(6,7)
    expect(n4).toBe(13);  
  })
  test('should be 18', ()=>{
    const n5 = soma.sum(9,9)
    expect(n5).toBe(18); 
  })
});

describe('Body tag', () => {
  test('should have <body>tag',async () => {
      nock('https://www.google.com/')
          .get('/')
          .reply(200, "<html><head></head><body></body></html>")
       expect( await bodyTag.bodyTag()).toMatch(/<body>/)
     
  })
})

