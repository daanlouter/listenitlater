Sounds = new Meteor.Collection('sounds');

Sounds.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! userId; }
});