module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-browserify', target: '1.2' }
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'rdfstore', target: '0.9' }
      ]);
    });
  }
};
