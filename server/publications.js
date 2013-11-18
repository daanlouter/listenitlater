Meteor.publish('sounds', function(currentUser) { 
	return Sounds.find({'fromUser': currentUser});
});