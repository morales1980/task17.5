var os = require('os');
var osinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();

  if(input !== null) {
    var instruction = input.trim();
    switch(instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;

      case '/sayhello':
        process.stdout.write('Hello!\n');
        break;

      case '/getOSinfo':
        var type = os.type();
        var release = os.release();
        if(type === 'Darwin') {
          type = 'OSX';
        } else if(type === 'Windows_NT') {
          type = 'Windows';
        }
        process.stdout.write('System: ' + type + '\n');
        process.stdout.write('Release: ' + release + '\n');
        break;

      case '/getCPUinfo':
        var cpu = os.cpus()[0].model;
        process.stdout.write('CPU: ' + cpu + '\n');
        break;

      case '/getUptime':
        var upTime = (os.uptime() / 60).toFixed(0);
        process.stdout.write('System uptime: ' + upTime + ' minutes\n');
        break;

      case '/getUserinfo':
        var userInfo = os.userInfo();
        process.stdout.write('Username: ' + userInfo.username + '\n');
        process.stdout.write('Homedir: ' + userInfo.homedir + '\n');
        break;

      case '/getFullinfo':
        osinfo.print();
        break;

      default:
        process.stderr.write('Wrong instruction!\n');
    };
  }
});
