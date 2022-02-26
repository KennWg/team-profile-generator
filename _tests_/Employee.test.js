const Employee = require('../lib/Employee.js');

test('tests if created employee object is valid', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.name).toBe('Tester');
    expect(employee.id).toBe(2);
    expect(employee.email).toBe('testing@mail.com');
});

test('tests if the name returned is correct from the getName function', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.getName()).toBe('Tester');
});

test('tests if the id returned is correct from the getId function', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.getId()).toBe(2);
});

test('tests if the email returned is correct from the getEmail function', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.getEmail()).toBe('testing@mail.com');
});

test('tests if the role returned by getRole function is employee', () => {
    const employee = new Employee('Tester',2,'testing@mail.com');

    expect(employee.getRole()).toBe('Employee');
});