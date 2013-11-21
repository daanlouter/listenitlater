
//Session.set('currentUser', Meteor.user()._id);

Meteor.subscribe('sounds', Session.get('currentUser'));


