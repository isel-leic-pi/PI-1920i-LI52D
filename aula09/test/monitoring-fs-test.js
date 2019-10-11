'use strict';

const expect = require('chai').expect;



const PATH = './test/foo'
const monitoringFs = require('../monitoring-fs')(PATH)


const exec = require('child_process').exec
const path = require('path')



describe('MonitoringFS', () => {
  let file = "slb.txt"
  
  exec(`touch ${path.join(PATH, file)}`, function callback(error, stdout, stderr){
    
  });

  it('should emit an event when a file in the monitoring folder is changed', done => {
    monitoringFs.on(monitoringFs.FS_EVENT, (err, data) => {
      expect(err).to.be.null
      expect(data).not.to.be.null
      expect(data.file).to.be.equal(file)
      done()
    })  
  });
});