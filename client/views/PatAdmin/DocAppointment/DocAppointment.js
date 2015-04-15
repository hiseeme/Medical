Template.DocAppointment.helpers({
	Doc: function() {
		return Doctor.findOne(Meteor.userId());
	}
});
