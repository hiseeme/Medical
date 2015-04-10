AutoForm.hooks({
	DocWorkPLaceSettingsForm : {
		before:{
			"insert": function(doc) {
				console.log(doc);
			}
		}
	},
	onSubmit: function(insertDoc, updateDoc, currentDoc) {
		this.event.preventDefault();
		console.log(this);
		console.log(insertDoc);
	},
});
