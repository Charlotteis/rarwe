import Ember from 'ember';

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

// Create a base 'SongCollection' object by extending the base Ember Object.
// Pass in a property to 'sortProperties' to define in what order you want the
// objects to appear.
var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

// Create a new SongCollection and push our created songs to it.
var songs = SongCollection.create();
songs.get('content').pushObjects([
  blackDog, yellowLedbetter,pretender, defyingGravity
]);

// Tell the wider application about the existence of the songs, we do not
// need to export any of our other individual Objects.
export default Ember.Controller.extend({
  songs: songs
});
