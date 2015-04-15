Template.NewSettings.helpers ({
	template : function () {
		return Session.get('settings_template');
	},
	data : function () {
		if (Session.equals("settings_template", "PersonalSettings")) {
			return Meteor.user();
		}
		else {
			return Doctor.findOne({_id:Meteor.userId()});
		}
	},
});
Template.NewSettings.onRendered(function () {
  // Use this.subscribe inside onCreated callback
  Session.set('settings_template',"PersonalSettings");
});
Template.NewSettings.events({
    'click a': function (event) {
		event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		var ori_mystring = event.target.pathname;
		var mystring = ori_mystring.replace('/','');
		console.log(mystring);
		//console.log(event);
      Session.set('settings_template', mystring);
    }
});
