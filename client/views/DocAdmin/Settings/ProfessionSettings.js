Template.ProfessionSettings.helpers ({
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "update"
		}
		else { return "readonly" }
	}
});

AutoForm.hooks({
	DocProfessionSettingsForm : {
		before:{
			update: function(doc) {
				console.log(doc);
			}
		}
	}
});
