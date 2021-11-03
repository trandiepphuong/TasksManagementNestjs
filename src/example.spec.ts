// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toEqual(true);
//     expect('Ariel').toEqual('Ariel');
//   });
// });

function addNumbers(numl, num2) {
  return numl + num2;
}
describe('addNumbers', () => {
  it('adds two numbers', () => {
    expect(addNumbers(2, 2)).toEqual(4);
  });
});
