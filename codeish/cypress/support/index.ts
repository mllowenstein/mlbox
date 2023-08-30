// Import commands.js using ES2015 syntax:
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      nav(path: string, params: any): Chainable<JQuery<HTMLElement>>
      checkLocal(): Chainable<JQuery<HTMLElement>>
      homeLogin(form: any): Chainable<JQuery<HTMLElement>>
      homeJoin(form: any): Chainable<JQuery<HTMLElement>>
      login(form: any): Chainable<JQuery<HTMLElement>>
      join(form: any): Chainable<JQuery<HTMLElement>>
      navClick(label: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
