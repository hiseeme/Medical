Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});
Meteor.publish(null, function () {
	console.log(this.userId);
	Doctor.find(this.userId);

});


Meteor.publish('notifications', function(id) { return Notifications.find({belongs_to:id});});
