const Manager = require('../lib/Manager.js');

test('tests if created manager object is valid', () => {
    const manager = new Manager('Tester', '2', 'testing@mail.com', '102');

    expect(manager.name).toBe('Tester');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('testing@mail.com');
    expect(manager.officeNumber).toBe('102');
});

test('tests if the name returned is correct from the getName function', () => {
    const manager = new Manager('Tester', '2', 'testing@mail.com', '102');

    expect(manager.getName()).toBe('Tester');
});

test('tests if the id returned is correct from the getId function', () => {
    const manager = new Manager('Tester', '2', 'testing@mail.com', '102');

    expect(manager.getId()).toBe('2');
});

test('tests if the email returned is correct from the getEmail function', () => {
    const manager = new Manager('Tester', '2', 'testing@mail.com', '102');

    expect(manager.getEmail()).toBe('testing@mail.com');
});

test('tests if the role returned by getRole function is Manager', () => {
    const manager = new Manager('Tester', '2', 'testing@mail.com', '102');

    expect(manager.getRole()).toBe('Manager');
});