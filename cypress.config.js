const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 30000,

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        writeDiag(state) {
          const fs = require('fs')
          const p = require('path').join('C:\\Users\\MSI\\AppData\\Local\\Temp\\opencode', 'diag.json')
          const arr = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : []
          arr.push(state)
          fs.writeFileSync(p, JSON.stringify(arr, null, 2), 'utf8')
          return null
        },
      })
    },
  },
});
