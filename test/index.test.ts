import { strict as assert } from 'node:assert';
import mimeTypes from 'mime-types';
import mm from 'mm';
import getTypeFromDefault, { getType } from '../src/index.js';

describe('cache-content-type', () => {
  afterEach(mm.restore);

  it('should work with cache', () => {
    assert.equal(getType('html'), 'text/html; charset=utf-8');
    mm.syncError(mimeTypes, 'contentType', 'mock error');
    assert.equal(getType('html'), 'text/html; charset=utf-8');
  });

  it('should return false when type not exists', () => {
    assert.equal(getTypeFromDefault('html-not-exists'), false);
    mm.syncError(mimeTypes, 'contentType', 'mock error');
    assert.equal(getTypeFromDefault('html-not-exists'), false);
  });
});
