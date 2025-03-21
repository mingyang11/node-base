import name from './testmodule.js';
import data from './data.json' assert { type: 'json' };
import fs from 'fs';

export default {
  name,
  data,
  fs,
};
