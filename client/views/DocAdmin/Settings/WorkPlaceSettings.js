Template.WorkPlaceSettings.helpers ({
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "insert"
		}
		else { return "readonly" }
	}
});
