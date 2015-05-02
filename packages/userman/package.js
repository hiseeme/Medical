Package.describe({
	summary: "Package for Appointment.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
  api.export(['LoginSchema','Patient','Doctor','Files']); //Files need to be done
  api.export(['LoginSchema','UpdateSchema','Workplaceform','DocSchema'],'client');
  api.use(['accounts-base','accounts-password','accounts-facebook','accounts-google',
  'aldeed:simple-schema','aldeed:collection2','aldeed:autoform','mongo','underscore','cfs:gridfs','cfs:standard-packages']);
  api.add_files([
  'client/js/collection.js'
  ,'client/js/autoform.js'
  ], 'client'); 
  //api.add_files([
  //'common/js/collections/collection.js'
  //]);
  api.add_files([
  'server/js/collections/patcollection.js'
  ,'server/js/collections/doccollection.js'
  ,'server/js/collections/collection.js'
  ,'server/js/posts.js'
  ,'server/js/oauth.js'
  ,'server/js/security/publication.js'
  ,'server/js/account.js'
  ], 'server');
});
