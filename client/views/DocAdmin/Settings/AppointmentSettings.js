Template.AppointmentSettings.helpers ({
	days : function () {
		return [{day:"Monday"}, {day:"Tuesday"},{day:"Wednesday"},{day:"Thursday"},{day:"Friday"},{day:"Saturday"},{day:"Sunday"}]
	},
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "update"
		}
		else { return "readonly" }
	},
});

