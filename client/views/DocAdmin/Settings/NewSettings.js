Template.NewSettings.helpers ({
	doctor : function () {
		return Doctor.findOne({_id:Meteor.userId()});
	},
	user : function () {
		return Meteor.user();
	},
});
Template.NewSettings.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('workplaces');
});
