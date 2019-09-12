const fs = require('fs');

module.exports = class {
  constructor(){

  }

  buildFuncString({code, type}){
    if(type === 'test') return code;

    if(type === 'func') return code;
    return '';
  }

  writeToFile(str){
    fs.writeFileSync(process.cwd()+'/docker/test.js', str, {
      encoding: 'utf8'
    });

    return true;
  }

  executeFunc(){
    const spawn = require('child_process').spawnSync;
    const cmd = spawn('docker-compose', ['-f', './docker/docker-compose.yml', 'up']);
    
    console.log(`stdout: ${cmd.stdout.toString()}`);

    const rs = cmd.stdout.toString().split('\n');
    const rs_str = rs[1].split('|')[1].replace(/ /, '').replace('\u001b[0m', '').toString();
    const result = JSON.parse(rs_str);

    return result;
  }

  run(code){
    const func = this.buildFuncString(code);
    this.writeToFile(func);
    return this.executeFunc();
  }
};