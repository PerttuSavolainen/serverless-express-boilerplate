import * as expressApp from '../index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

const { app } = expressApp as any;

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hello API Request', () => {
  it('should return response on call', async () => {
    const response = await chai.request(app).get("/");
    expect(response.text).to.eql("Hello there!");
  })
});