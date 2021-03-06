const firebase = require('firebase-admin')
const firebaseline = require('firebaseline')
const Base64 = require('js-base64').Base64

function operation (name, args) {
  return firebaseline.operations[name](firebase, args)
}

function initialize (config) {
  if (firebase.apps.length > 0) {
    // No need to inititalize again
    return
  }

  // Initialize for the first time
  firebase.initializeApp({
    credential: firebase.credential.cert(config.serviceAccount),
    databaseURL: 'https://' + config.serviceAccount.project_id + '.firebaseio.com'
  })
}

function save (data) {
    // Generate some defaults for each item
  const defaults = () => ({
    timestamp: new Date().getTime()
  })

  return Promise.all(data.map(item => {
    return firebase.database().ref(item.path).set(Object.assign({}, defaults(), item.data))
  }))
}

function verify ({ event, config }) {
  return new Promise((resolve, reject) => {
    initialize(config.google)

    if (!event || !event.headers || !event.headers.Authorization) {
      resolve()
      return
    }

    const token = Base64.decode(event.headers.Authorization)
    firebase.auth().verifyIdToken(token)
            .then((user) => resolve({ user }))
            .catch(() => resolve())
  })
}

module.exports = {
  initialize,
  operation,
  verify,
  save
}
