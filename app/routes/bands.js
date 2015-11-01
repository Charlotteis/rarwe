import Ember from 'ember';

// Create a simple band object, with a single attribute of 'name'
var Band = Ember.Object.extend({
  name: '',

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
});

// Create the base object for a generic Song, including the attributes we
// want all songs to have
var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

// Create a song, based off of the Song object.
var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

// Create a song, based off of the Song object.
var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var daughter = Song.create({
  title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});

// Create a song, based off of the Song object.
var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

// Create a song, based off of the Song object.
var defyingGravity = Song.create({
  title: 'Defying Gravity',
  band: 'Wicked OST',
  rating: 4
});

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

// Initialise several Band objects, passing in a name for each
var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam = Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter, daughter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });
var wicked = Band.create({ name: 'Wicked OST', songs: [defyingGravity] });

// Create an array of bands, and have them returned within the model.
var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters, wicked]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
