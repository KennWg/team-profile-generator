const Intern = require('../lib/Intern.js');

test('tests if created intern object is valid', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.name).toBe('Tester');
    expect(intern.id).toBe('2');
    expect(intern.email).toBe('testing@mail.com');
    expect(intern.school).toBe('testschool');
});

test('tests if the name returned is correct from the getName function', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.getName()).toBe('Tester');
});

test('tests if the id returned is correct from the getId function', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.getId()).toBe('2');
});

test('tests if the email returned is correct from the getEmail function', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.getEmail()).toBe('testing@mail.com');
});

test('tests if the school returned is correct from the getSchool function', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.getSchool()).toBe('testschool');
});

test('tests if the role returned by getRole function is Intern', () => {
    const intern = new Intern('Tester', '2', 'testing@mail.com', 'testschool');

    expect(intern.getRole()).toBe('Intern');
});