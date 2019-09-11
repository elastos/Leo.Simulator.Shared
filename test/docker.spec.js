import {describe, it, before} from 'mocha';

import { expect, should } from 'chai';

const code = `
function main(){
  var r = 0;
  for(var i=0, len=arguments.length; i<len; i++){
    r += parseFloat(arguments[i])
  }
  return r;
}

const result = main(11,22,33);

console.log(JSON.stringify(result));
`;

import Docker from '../docker';
describe('docker folder', ()=>{
  it('buildFuncString', ()=>{
    const d = new Docker();
    const rs = d.buildFuncString({
      type : 'test',
      code : 'a+b'
    });

    expect(rs).to.eql('a+b');
  });


  it('run', ()=>{
    const d = new Docker();
    const rs = d.run({
      type : 'func',
      code : code
    });

    expect(rs).to.eql(66);
  });
});

