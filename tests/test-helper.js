import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import prepTests from 'mammoth-test-helpers/test-support/prep-tests';

prepTests();

setApplication(Application.create(config.APP));

start();
