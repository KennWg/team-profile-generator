//Function to generate HTML for page
const generatePage = employeeData => {
    return `
    <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
        <div class="container flex-row justify-center align-center py-3">
            <h1 class="page-title text-secondary bg-tertiary py-2 px-3">My Team</h1>
        </div>
    </header>
    <main class="container my-5">
        ${generateCards(employeeData)}
    </main>
  </body>
  `
};

//function for going through array of employees to generate cards
const generateCards = employeeData => {
    return `
    <section class="my-3">
      <div class="flex-row justify-center">
        ${employeeData.map(employeeCard)}
      </div>
    </section>
    `
};

//function for individual employee cards
const employeeCard = employee => {
    let card = 
    `
    <div class="card w-25">
        <div class="card-header">
            <h3>${employee.name}</h3>
            <h4>${employee.getRole()}</h4>
        </div>
        <div class="card-body">
            <h5>ID: ${employee.id}</h5>
            <h5>Email: <a href="mailto:${employee.email}">${employee.email}</a></h5>
    `

    if(employee.getRole() === 'Manager'){
        card += `<h5>Office Number: ${employee.officeNumber}</h5>`;
    } else if(employee.getRole() === 'Engineer'){
        card += `<h5>Github:<a href="https://github.com/${employee.github}">${employee.github}</a></h5>`;
    } else {
        card += `<h5>School: ${employee.school}</h5>`;
    }

    card += `
            </div>
    </div>`

    return card;
};

module.exports = generatePage;