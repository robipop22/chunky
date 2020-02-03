/* eslint-disable no-unused-expressions */

import React from 'react'
import savor from 'react-savor'
import { Cover } from '../../../../src/components'

savor

.add('should handle component lifecycle', (context, done) => {
  const props = { id: "test", option: { file: "test" }}
  const container = context.shallow(<Cover {...props}/>)
  const cover = container.instance()
  
  // And, we're looking good
  done()
})

.run('[Web] Cover Component')
