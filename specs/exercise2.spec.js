//  Test exercise 2
describe("a test suite with shared setup", function(){
  const users = [
    { id: 1, name: 'John', age: 22,  gender: 'm' },
    { id: 2, name: 'Ellis', age: 46, gender: 'f'},
    { id: 3, name: 'Sara', age: 33, gender: 'f'},
    { id: 4, name: 'Will', age: 30, gender: 'm'},
    { id: 5, name: 'Jane', age: 35, gender: 'f'},
    { id: 6, name: 'Mike', age: 52, gender: 'm'},
  ];
  
   it("returns an array of ids", function(){
      expect(idsOnly(users)).toEqual([1,2,3,4,5,6]);
    });
  
});
  