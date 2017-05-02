import resolver                  from './helpers/resolver';
import prepTests                 from 'mammoth-test-helpers/test-support/prep-tests';
import { setResolver }           from 'ember-qunit';

setResolver(resolver);

prepTests();
