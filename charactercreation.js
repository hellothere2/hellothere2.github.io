/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */
var imageRepository = new function() {
	// Define images
	//BG
	this.background = new Image();
	//Special
	this.imprisoned = new Image();
	this.boils = new Image();
	this.scars = new Image();
	this.masks = new Image();
	this.red_dots = new Image();
	this.eyepatch = new Image();
	//Base
	this.western_male_base_1 = new Image();
	this.western_male_base_2 = new Image();
	this.western_male_base_3 = new Image();
	this.western_female_base_1 = new Image();
	this.western_female_base_2 = new Image();
	this.western_female_base_3 = new Image();
	this.muslim_male_base_1 = new Image();
	this.muslim_male_base_2 = new Image();
	this.muslim_male_base_3 = new Image();
	this.muslim_female_base_1 = new Image();
	this.muslim_female_base_2 = new Image();
	this.muslim_female_base_3 = new Image();


	// Ensure all images have loaded before starting the game
	var numImages = 19;
	var numLoaded = 0;
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {
			window.init();
		}
	}
	this.background.onload = function() {
		imageLoaded();
	}
	this.imprisoned.onload = function() {
		imageLoaded();
	}
	this.boils.onload = function() {
		imageLoaded();
	}
	this.scars.onload = function() {
		imageLoaded();
	}
	this.masks.onload = function() {
		imageLoaded();
	}
	this.red_dots.onload = function() {
		imageLoaded();
	}
	this.eyepatch.onload = function() {
		imageLoaded();
	}
	this.western_male_base_1.onload = function() {
		imageLoaded();
	}
	this.western_male_base_2.onload = function() {
		imageLoaded();
	}
	this.western_male_base_3.onload = function() {
		imageLoaded();
	}
	this.western_female_base_1.onload = function() {
		imageLoaded();
	}
	this.western_female_base_2.onload = function() {
		imageLoaded();
	}
	this.western_female_base_3.onload = function() {
		imageLoaded();
	}
	this.muslim_male_base_1.onload = function() {
		imageLoaded();
	}
	this.muslim_male_base_2.onload = function() {
		imageLoaded();
	}
	this.muslim_male_base_3.onload = function() {
		imageLoaded();
	}
	this.muslim_female_base_1.onload = function() {
		imageLoaded();
	}
	this.muslim_female_base_2.onload = function() {
		imageLoaded();
	}
	this.muslim_female_base_3.onload = function() {
		imageLoaded();
	}

	// Set images src
	//BG
	this.background.src = "characters/shared/backgrounds.png";
	//Special
	this.imprisoned.src = "characters/shared/imprisoned.png";
	this.boils.src = "characters/shared/boils.png";
	this.scars.src = "characters/shared/scars.png";
	this.masks.src = "characters/shared/maimed_masks.png";
	this.red_dots.src = "characters/shared/red_dots.png";
	this.eyepatch.src = "characters/shared/maimed_eyepatch.png";
	//Base
	this.western_male_base_1.src = "characters/western_male/western_male_base_1.png";
	this.western_male_base_2.src = "characters/western_male/western_male_base_2.png";
	this.western_male_base_3.src = "characters/western_male/western_male_base_3.png";
	this.western_female_base_1.src = "characters/western_female/western_female_base_1.png";
	this.western_female_base_2.src = "characters/western_female/western_female_base_2.png";
	this.western_female_base_3.src = "characters/western_female/western_female_base_3.png";
	this.muslim_male_base_1.src = "characters/muslim_male/western_male_base_1.png";
	this.muslim_male_base_2.src = "characters/muslim_male/western_male_base_2.png";
	this.muslim_male_base_3.src = "characters/muslim_male/western_male_base_3.png";
	this.muslim_female_base_1.src = "characters/muslim_female/muslim_female_base_1.png";
	this.muslim_female_base_2.src = "characters/muslim_female/muslim_female_base_2.png";
	this.muslim_female_base_3.src = "characters/muslim_female/muslim_female_base_3.png";
}