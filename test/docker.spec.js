import {describe, it, before} from 'mocha';

import { expect, should } from 'chai';

import {fake_img} from './fake';


import Docker from '../docker';
describe('docker folder', ()=>{
  // it('buildFuncString', ()=>{
  //   const d = new Docker();
  //   const rs = d.buildFuncString({
  //     type : 'test',
  //     code : 'a+b'
  //   });

  //   expect(rs).to.eql('a+b');
  // });

  it('getPath', ()=>{
    const d = new Docker();
    const rs = d.getPath();
    expect(rs).to.eql('');
  })

  // it('run', ()=>{
  //   const d = new Docker();
  //   const rs = d.run({
  //     type : 'image',
  //     code : fake_img
  //   });

  //   expect(rs).not.to.eql(true);
  // });
});

