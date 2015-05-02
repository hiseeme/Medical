Template.DocSelectedTemplate.helpers({
  gender: function() {return this.gender.toLowerCase();},
  contact_nos: function() {return this.contact_nos;},
  email: function() {return this.email_id;},
  c_facility : function() {
		return Workplace.find({"doctor_id":Session.get("doc_id")});
	},
});


Template.DocSelectedTemplate.events({
	'click .btn': function(e) {
		if(!!Session.get("clinic_id"))
			Session.set("appointment_id","temp");
	}
	
});
AutoForm.hooks({
	Appointment_form : {
		formToDoc: function(doc) {
			doc.user_id=Session.get("patient_id");
			doc.doctor_id=Session.get("doc_id");
		return doc;
		}
	},
});

Template.DocFacilityList.helpers({
	facility_place : function () {
		return this.address;
	}
});

Template.DocFacilityList.events({
	'click .droplist': function(e) {
		console.log(this._id +" clinic_id selected");
		e.preventDefault();
		Session.set("clinic_id", (this._id).toString() );
	}
	
});




