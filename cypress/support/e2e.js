// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './customCommands/login/login.js'
import './customCommands/homePage/homepage.js'
import './customCommands/logout/logout.js'
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

import "cypress-real-events"

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')

//TEst calistirken sol panelde gelen XHR'lari(GET,POST...) gizleyecek
const app=window.top

if(!app.document.head.querySelector('[data-hide-command-log-reguest')){
    const style=app.document.createElement('style')
    style.innerHTML='.command-name-request, command-name-xhr{display:none}'
    style.setAttribute('data-hide-command-log-reguest' ,'')

    app.document.head.appendChild(style)
}