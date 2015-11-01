import Ember from 'ember';

// Create a simple band object, with a single attribute of 'name'
var Band = Ember.Object.extend({
  name: '',
});

// Initialise several Band objects, passing in a name for each
var ledZeppelin = Band.create({ name: 'Led Zeppelin'});
var pearlJam = Band.create({ name: 'Pearl Jam'});
var fooFighters = Band.create({ name: 'Foo Fighters'});
var wicked = Band.create({ name: 'Wicked OST'});

// Create an array of bands, and have them returned within the model.
var bands = [ledZeppelin, pearlJam, fooFighters, wicked];

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
