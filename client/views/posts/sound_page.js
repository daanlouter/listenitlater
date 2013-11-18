Template.soundPage.helpers({
	currentSound: function() {
		return Sounds.findOne(Session.get('currentPostId')); 
	}
})