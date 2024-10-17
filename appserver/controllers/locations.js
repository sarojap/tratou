module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Travel and Tourism - Explore Places to Visit',
    pageHeader: {
      title: 'Travel and Tourism',
      strapline: 'Find exciting travel destinations near you!'
    },
    sidebar: "Looking for a great travel spot? Travel and Tourism helps you explore amazing places to visit. " +
      "Whether you seek adventure, relaxation, or culture, let Travel and Tourism guide you to your next destination.",
    locations: [{
      name: 'Sunny Beach Resort',
      address: '123 Beachside Road, Goa, 403001',
      rating: 5,
      facilities: ['Beach Access', 'Luxury Stay', 'Guided Tours'],
      distance: '500m'
    }, {
      name: 'Mountain View Camp',
      address: '456 Hilltop Lane, Manali, 175131',
      rating: 4,
      facilities: ['Hiking', 'Campfire', 'Guided Treks'],
      distance: '1km'
    }, {
      name: 'City Lights Hotel',
      address: '789 Downtown Street, Mumbai, 400001',
      rating: 4,
      facilities: ['City Tours', 'Luxury Stay', 'Nightlife'],
      distance: '2km'
    }]
  });
};

module.exports.locationsinfo = function(req, res) {
  res.render('locations-info', { title: 'Sunny Beach Resort' });
};

module.exports.locationsinfo1 = function(req, res) { 
  res.render('locations-info1', { title: 'Mountain View Camp' }); 
};

module.exports.locationsinfo2 = function(req, res) {
  res.render('locations-info2', { title: 'City Lights Hotel' });
};

// New Method for Attractions
module.exports.attractions = function(req, res) {
  res.render('attractions', {
    title: 'Attractions - Explore Amazing Places',
    attractions: [
      {
        name: 'Taj Mahal',
        location: 'Agra, India',
        description: 'An ivory-white marble mausoleum.',
        rating: 5
      },
      {
        name: 'Eiffel Tower',
        location: 'Paris, France',
        description: 'A wrought-iron lattice tower on the Champ de Mars.',
        rating: 4.5
      },
      {
        name: 'Grand Canyon',
        location: 'Arizona, USA',
        description: 'A steep-sided canyon carved by the Colorado River.',
        rating: 4.8
      }
    ]
  });
};

module.exports.addReview = function(req, res) {
  res.render('locations-review-form', { title: 'Add Your Review' });
};
