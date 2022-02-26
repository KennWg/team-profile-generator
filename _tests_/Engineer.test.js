const Engineer = require('../lib/Engineer.js');

test('tests if created engineer object is valid', () => {
    const employee = new Engineer('Tester',2,'testing@mail.com','testgit');

    expect(employee.name).toBe('Tester');
    expect(employee.id).toBe(2);
    expect(employee.email).toBe('testing@mail.com');
    expect(employee.github).toBe('testgit');
});