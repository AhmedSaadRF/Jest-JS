const say = require('../say');

test('sayHello function returns correct string', () => {
  expect(say()).toBe('Hello Jest!');
});
