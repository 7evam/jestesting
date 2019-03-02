const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  // toBe is known as a matcher
  // there are different kinds of matchers
  expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5)
})
// to check for truthy or falsy values,
// toBeNull
// toBeUndefined
// toBeDefined
// toBeTruthy, toBeFalsy

test('Should be null', () => {
  expect(functions.isNull(2,2)).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

// toBe does not work on an object because
// objects/arrays are reference types
test('User should be Evan object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Evan',
    middleName: 'Kristopher',
    lastName: 'Lane'
  })
})

// less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// regular expressions
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})

// arrays
test('admin should be in usernames', () => {
  usernames = ['evan', '7evam', 'admin'];
  expect(usernames).toContain('admin')
})

// working with async data
test('User fetched name should be Leanne Graham', () => {
  // this test would pass no matter what
  // without expect assertions and a return statement
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// promise
test('User fetched name should be Leanne Graham with async', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
});













