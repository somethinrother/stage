import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Location name ${i}`; },
  description(i) { return `Location description ${i}` }
});
