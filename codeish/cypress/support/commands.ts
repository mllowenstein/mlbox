// Custom Command for navigation with query params
Cypress.Commands.add('nav', (url?: string, params?: any) => {
  const qp = `${params.toString()}`;
  cy.visit(url + `?${qp}`);
});

// Custom Command for checking browser storage
Cypress.Commands.add('checkLocal', () => {
  const local = cy.window().get('localStorage');
  console.log(local);
});

// Initial Login Workflow
Cypress.Commands.add('homeLogin', (form: any) => {
  console.log(form);
});

// Initial SignUp Workflow
Cypress.Commands.add('homeJoin', (form: any) => {
  console.log(form);
});

// Custom Command for Login
Cypress.Commands.add('login', (form: any) => {
  console.log(form);
});

// Custom Command for Login
Cypress.Commands.add('join', (form: any) => {
  console.log(form);
});

// Reusasble Command for clicking a link
Cypress.Commands.add('navClick', (label) => {
  cy.get('a').contains(label).click()
});
