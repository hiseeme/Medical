Template.CalendarSettings.helpers ({
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "update"
		}
		else { return "readonly" }
	}
});


