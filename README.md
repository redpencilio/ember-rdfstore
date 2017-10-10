# ember-rdfstore

[rdfstore](https://www.npmjs.com/package/rdfstore) as an injectable Ember Service.

## Installation

```bash
ember install ember-rdfstore
```

## Usage

Inject the `rdfstore` service and use it as you would use the [rdfstore](https://www.npmjs.com/package/rdfstore) library.

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
* clear
* delete
* execute
* executeWithEnvironment
* graph
* insert
* load
* node

The native store from the `rdfstore` library is directly accessible through `rdfstore.content`.
