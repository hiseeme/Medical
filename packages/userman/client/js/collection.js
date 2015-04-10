LoginSchema = {};

	LoginSchema.Dlogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});

	LoginSchema.Plogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});


	LoginSchema.Pregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	  /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/ label : 'Birthday'	},
	});
	
	LoginSchema.Dregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	   /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/  label : 'Birthday'	},
	});

	LoginSchema.Ppassreset= new SimpleSchema({ 	
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
