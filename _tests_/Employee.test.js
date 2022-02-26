const Employee = require('../lib/Employee.js');

test('tests if created employee object is valid', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.name).toBe('Tester');
    expect(employee.id).toBe(2);
    expect(employee.email).toBe('testing@mail.com');
});