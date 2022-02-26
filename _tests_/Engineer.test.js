const Engineer = require('../lib/Engineer.js');

test('tests if created engineer object is valid', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit');

    expect(engineer.name).toBe('Tester');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('testing@mail.com');
    expect(engineer.github).toBe('testgit');
});

test('tests if the name returned is correct from the getName function', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit')

    expect(engineer.getName()).toBe('Tester');
});

test('tests if the id returned is correct from the getId function', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit')

    expect(engineer.getId()).toBe('2');
});

test('tests if the email returned is correct from the getEmail function', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit')

    expect(engineer.getEmail()).toBe('testing@mail.com');
});

test('tests if the github returned by getGithub function is correct', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit')

    expect(engineer.getGithub()).toBe('testgit');
});

test('tests if the role returned by getRole function is Engineer', () => {
    const engineer = new Engineer('Tester', '2', 'testing@mail.com', 'testgit')

    expect(engineer.getRole()).toBe('Engineer');
});