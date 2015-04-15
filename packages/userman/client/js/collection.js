LoginSchema = {};

	LoginSchema.Dlogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});

	LoginSchema.Dregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	   /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/  label : 'Birthday'	},
	});

	LoginSchema.Dpassreset= new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password: {	 	type: String,  	regEx: /^[A-Z]{2}$/		,label : 'Password' 		},
		confirmPassword: {type: String,	regEx: /^[A-Z]{2}$/		,label : 'Renter Password' ,
			custom: function () {
				if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
																							},
	});


UpdateSchema = {};

	UpdateSchema.UserCountry = new SimpleSchema({ 	
		name: 	{	type: String	},
		code: 	{	type: String,	regEx: /^[A-Z]{2}$/		}
	});

	UpdateSchema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-z .]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: UpdateSchema.UserCountry,	optional: true						},
	});
	
	UpdateSchema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
	UpdateSchema.User = new SimpleSchema({
	username:	{	type: String,	regEx: /^[a-z0-9A-Z_]{3,15}$/,	optional: true,	},
	emails: 	{	type: [UpdateSchema.email],	optional: true							},
	//createdAt:  {	type: Date			,autoValue: function() { return new Date;}	},
	profile: 	{	type: UpdateSchema.UserProfile,										},
	//services: 	{	type: Object,	optional: true,		blackbox: true				},
	//roles: 		{	type: Object,						blackbox: true				}, //defauth value
    
	});


DocSchema = {};
DocSchema.Workplace = {};

/////////////////////////////

DocSchema.Workplace.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

DocSchema.Workplace.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country:   	{	type: DocSchema.Workplace.UserCountry,	optional: true			},
}); 


////
DocSchema.Workplace.slots_description = new SimpleSchema({ 
	start_time:	{	type : Date			,optional : true,						},
	end_time:	{	type : Date													},
	slot_duration:{	type : Number												},
});
DocSchema.Workplace.slots = new SimpleSchema({ 
	day :		{	type : String ,	allowedValues: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","unaddressed"]},
	description:{	type :	[DocSchema.Workplace.slots_description] 				},
});
DocSchema.Workplace.schema = new SimpleSchema({ 
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : DocSchema.Workplace.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
	slots_description:{	type : [DocSchema.Workplace.slots],	optional : true,		},
});
////

/////////////////////////////

DocSchema.qualification = new SimpleSchema({
	course :	{	type : String,	max:144,		optional : true				},
	college :	{	type : String,	max:144,		optional : true				},
	city :		{	type : String,	max:144,		optional : true				},
});

DocSchema.fields = new SimpleSchema({
	speciality :{	type : String, 												},
	description:{	type : String,	max:144,									},
	type :		{	type : String, 												},
	qualification:{	type : [DocSchema.qualification]							},
});

DocSchema.schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},   
	fields :	{	type : DocSchema.fields,									}, 
	workplaces:	{	type : [DocSchema.Workplace.schema]	,	optional : true		},
});

DocSchema.Workplaces = new SimpleSchema({
	workplaces:	{	type : [DocSchema.Workplace.schema]	,						}, 
});

Doctor = new Mongo.Collection("doctor");
Patient = new Mongo.Collection("patients");
