# ember-rdfstore

[rdfstore](https://www.npmjs.com/package/rdfstore) as an injectable Ember Service.

## Installation

```bash
ember install ember-rdfstore
```

## Usage

Inject the `rdfstore` service and use it as you would use the [rdfstore](https://www.npmjs.com/package/rdfstore) library. Except for the callback arguments which are implemented as Ember Promises.

```javascript
export default Ember.Component.extend({
  rdfstore: Ember.inject.service(),
  actions: {
    executeQuery(query) {
      this.get('rdfstore').load('text/turtle', ttl, 'http://mu.semte.ch/application', (err, results) => {
        ...
      }
    }
  }
```

The following methods are available on the `rdfstore` service and will be proxied to the native store:
* clear(): Promise
* delete(): Promise
* execute(): Promise
* executeWithEnvironment(): Promise
* graph(): Promise
* insert(): Promise
* load(): Promise
* node(): Promise

Have a look at [the in-code documentation of the rdfstore library](https://github.com/antoniogarrote/rdfstore-js/blob/master/src/store.js) that specifies the parameters of each method. The final `callback` argument of each method is implemented as an Ember Promise by the `rdfstore` service.

The [native store](https://github.com/antoniogarrote/rdfstore-js/blob/master/src/store.js) from the `rdfstore` library is directly accessible through `rdfstore.content`.
