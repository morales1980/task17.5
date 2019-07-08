var os = require('os');
var colors = require('colors');

function getFullinfo() {
  var type = os.type();
  if(type === 'Darwin') {
    type = 'OSX';
  } else if( type === 'Windows_NT') {
    type = 'Windows';
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = (os.uptime() /60).toFixed(0);
  var userInfo = os.userInfo();

  process.stdout.write('Operating system is: '.grey + type + '\n');
  process.stdout.write('Release is: '.red + release + '\n');
  process.stdout.write('CPU model is: '.magenta + cpu + '\n');
  process.stdout.write('CPU uptime is: ~ '.green + uptime + ' minutes \n');
  process.stdout.write('User name is: '.yellow + userInfo.username + '\n');
  process.stdout.write('User home dir is: '.gray + userInfo.homedir + '\n');
}

exports.print = getFullinfo;
