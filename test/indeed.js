import expect from 'expect';
import Indeed from '../src/index';

describe('Indeed Contructor', () => {
  it('throws an error for not including a publisher id', () => {
    expect(Indeed).toThrow(Error);
  });
});
