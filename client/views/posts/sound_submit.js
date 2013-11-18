Template.soundSubmit.events({ 
	'submit form': function(event) {
		event.preventDefault();
		var sound = {
			url: $(event.target).find('[name=url]').val(),
			title: $(event.target).find('[name=title]').val(), 
			message: $(event.target).find('[name=message]').val(),
			fromUser: Meteor.user()._id
		}
		sound._id = Sounds.insert(sound);
		// Meteor.Router.to('soundPage', sound); 
	}
});