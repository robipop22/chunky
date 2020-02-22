/* eslint-disable no-unused-expressions */

const savor = require('savor')
const Init = require('../../../src/commands/init')

savor.

add('should create a new workspace with a default context', (context, done) => {
  const cmd = new Init()
  
  done()
}).

run('[Chunky Carmel Plugin] Init Command')
