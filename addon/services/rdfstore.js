import Ember from 'ember';
import rdfstore from 'npm:rdfstore';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    rdfstore.create((err, store) => {
      this.content = store;
    });
  },
  clear() {
    return this.content.clear(...arguments);
  },
  delete() {
    return this.content.delete(...arguments);
  },
  execute() {
    return this.content.execute(...arguments);
  },
  executeWithEnvironment() {
    return this.content.executeWithEnvironment(...arguments);
  },
  graph() {
    return this.content.graph(...arguments);
  },
  insert() {
    return this.content.graph(...arguments);
  },
  load() {
    return this.content.load(...arguments);
  },
  node() {
    return this.content.node(...arguments);
  }
});
