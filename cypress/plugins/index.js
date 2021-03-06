// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
// }

// module.exports = (on, config) => {
// you can open devtools directly
// see https://docs.cypress.io/api/plugins/browser-launch-api#Modify-browser-launch-arguments
// }

const { startDevServer } = require('@cypress/vite-dev-server')

const { defineConfig } = require('vite')
const reactPlugin = require('@vitejs/plugin-react')

/**
 * @type {Cypress.PluginConfig}
 *
 * see: https://docs.cypress.io/guides/component-testing/framework-configuration#Vite-Based-Projects-Vue-React
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('dev-server:start', options => {
    return startDevServer({
      options,
      viteConfig: defineConfig({
        plugins: [reactPlugin()],
      }),
    })
  })

  return config
}
