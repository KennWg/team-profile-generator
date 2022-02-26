const Intern = require('../lib/Intern.js');

test('tests if created intern object is valid', () => {
    const intern = new Intern('Tester',2,'testing@mail.com','testschool');

    expect(intern.name).toBe('Tester');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('testing@mail.com');
    expect(intern.school).toBe('testschool');
});