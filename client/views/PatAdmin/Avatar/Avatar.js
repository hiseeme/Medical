Template.Avatar.rendered = function(){
	window.viewer_  = new o3v.Viewer();

};
Template.Avatar.helpers({
	myArrayWithIndex: function(){
    return _.map(Avatar.findOne().layerOpacities,function(value,index){
      return {
        index:index,
        value:value
      };
    });
  },
});
Template.Avatar.events({
    'click canvas': function (event) {
		//event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		console.log("canvas");
		//event.stopPropagation();
		Avatar.update({_id:"1"},{$set :{layerOpacities:window.viewer_.layerOpacityManager_.layerOpacities_,
		camera : _.pick(window.viewer_.navigator_.camera,'eye','target')}});
    }
});

Template.controller.rendered = function(){
	console.log("SLIDERRRRRRRRRR"+this.index);
	$(".slider"+this.index).noUiSlider({
		start: [0, 100],
		step: 1,
		connect: true,
		range: {
		'min': 0,
		'max': 100
		}
	});
	//console.log($(".slider"+this.index).val());
};

Template.controller.events({
    'click div': function (event) {
		event.stopPropagation();
		//console.log(this);
		val = $(".slider"+this.index).val()[1]/100;
		console.log(val);
		opacity = Avatar.findOne().layerOpacities;
		opacity[this.index]=val;
		Avatar.update({_id:"1"},{$set :{layerOpacities:opacity}});
	}
});
	/*
	Tracker.autorun(function () {
		Avatar.find().fetch();
		window.viewer_.layerOpacityManager_.layerOpacities_=_.clone(Avatar.findOne().layerOpacities);
		window.viewer_.navigator_.camera.eye= _.clone(Avatar.findOne().camera.eye);
		window.viewer_.navigator_.camera.target= _.clone(Avatar.findOne().camera.target);
		window.viewer_.layerOpacityManager_.callbacks[0]();
		console.log("Avatar rendered  TEMPLATE");
		console.log(Avatar.findOne().camera.eye);
		console.log(window.viewer_.navigator_.camera.eye);
		console.log(Avatar.findOne().camera.target);
		console.log(window.viewer_.navigator_.camera.target);
	});
	
	$(".slider"+4).noUiSlider({
		start: [0, 100],
		step: 1,
		connect: true,
		range: {
		'min': 0,
		'max': 100
		}
	});
	*/
