const Manager = require('../lib/Manager.js');

test('tests if created manager object is valid', () => {
    const manager = new Manager('Tester',2,'testing@mail.com','102');

    expect(manager.name).toBe('Tester');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('testing@mail.com');
    expect(manager.office).toBe('102');
});