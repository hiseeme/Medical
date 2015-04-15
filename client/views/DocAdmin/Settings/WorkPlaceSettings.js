Template.WorkPlaceSettings.helpers ({
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "update"
		}
		else { return "readonly" }
	}
});

AutoForm.hooks({
	DocWorkPLaceSettingsForm : {
		before:{
			update: function(doc) {
				console.log(doc);
				return doc;
			}
		}
	}
});
