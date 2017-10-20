import Ember from 'ember';
import rdfstore from 'npm:rdfstore';

const _proxyMethods = [
  'clear',
  'delete',
  'execute',
  'executeWithEnvironment',
  'graph',
  'insert',
  'load',
  'node',
  'registeredGraphs'
];

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    // dynamically add all proxy methods and wrap callback in Ember promise
    _proxyMethods.forEach( (methodName) => {
      this[methodName] = function() {
        return new Ember.RSVP.Promise( (resolve, reject) => {
          this.content[methodName](...arguments, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };
    });

    // create initial store
    rdfstore.create((err, store) => {
      this.content = store;
    });
  }
});
