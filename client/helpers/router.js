Meteor.Router.add({
	'/': 'soundsList',
	'/sounds/:_id': {
		to: 'soundPage',
		and: function(id) { 
			Session.set('currentPostId', id); 
		}
	},
	'/submit': 'soundSubmit'
});