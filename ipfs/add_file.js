'use strict'

const series = require('async/series')
const IPFS = require('ipfs')
const Readable = require('stream').Readable
const loadFixture = require('aegir/fixtures')
const node = new IPFS()
var bigFile = loadFixture(__dirname, 'Charlene.mp4', 'interface-ipfs-core')
let fileMultihash
series([
  (cb) => node.on('ready', cb),
  (cb) => node.version((err, version) => {
    if (err) { return cb(err) }
    console.log('Version:', version.version)
    cb()
  }),
  (cb) => node.files.add(bigFile, (err, result) => {
    if (err) { return cb(err) }

    console.log('\nAdded file:', result[0].path, result[0].hash)
    fileMultihash = result[0].hash
    cb()
  })
])
