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

Meteor.Router.filters({ 
	'requireLogin': function(page) {
		if (Meteor.user()) 
			return page;
		else if (Meteor.loggingIn()) 
			return 'loading';
		else
			return 'accessDenied';
	} 
});


Meteor.Router.filter('requireLogin', {only: 'soundSubmit'});