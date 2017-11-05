//Gets container
let bol_container = $(".bol-container");
let bol_overlay = $("#bol-overlay");


/*** Create Array of Images***/
//Finds all img tags
let bol_list_array = bol_container.find("ul li img");

//declares img array
let bol_img_list = [];
//assigns the id, source and alt of each image to an object and pushes it to the array
for(i=0; i<bol_list_array.length; i++){
	bol_img_list[i] = {"id":i, "src": bol_list_array[i].src, "alt": bol_list_array[i].alt}
}


//Detects click on an image item and activates the overlay
bol_container.find("ul li").click(function(){

	//Gets list item that was clicked
	var currentIndex = $(this).parent().children().index(this);

	//Makes overlay visible
	bol_overlay.css({"visibility":"visible"});

	//Creates lightbox and assigns it to a variable
	bol_container.prepend('<div id="bol-lightbox"></div>');
	bol_lightbox = $("#bol-lightbox");

	//Creats title element
	bol_lightbox.append('<div id="bol-lightbox-title">' + bol_img_list[currentIndex].alt + '</div>');

	//Creates img element
	bol_lightbox.append('<img id="bol-lightbox-img" src="' + bol_img_list[currentIndex].src + '" alt="' + bol_img_list[currentIndex].alt + '">');

	//Creates chevrons
	bol_lightbox.append('<div id="bol-chevron-right" class="fa fa-chevron-right"></div>');
	bol_lightbox.append('<div id="bol-chevron-left" class="fa fa-chevron-left"></div>');

	let bol_right = $("#bol-chevron-right");
	let bol_left = $("#bol-chevron-left");
	let bol_curr_img = $("#bol-lightbox-img");
	let bol_curr_title = $("#bol-lightbox-title");

	/* If right chevron is clicked, check that the currently selected image isnt the last one in the list - 
	if it isn't, cycle through until it is, then reset to the first image*/
	bol_right.click(function(){
		if(currentIndex < (bol_img_list.length - 1)){
			currentIndex++;
			bol_curr_img.attr("src" , bol_img_list[currentIndex].src);
			bol_curr_img.attr("alt", bol_img_list[currentIndex].alt);
			bol_curr_title.html(bol_img_list[currentIndex].alt);
		}
		else{
			currentIndex = 0;
			bol_curr_img.attr("src" , bol_img_list[currentIndex].src);
			bol_curr_img.attr("alt", bol_img_list[currentIndex].alt);
			bol_curr_title.html(bol_img_list[currentIndex].alt);
		}
	});

	/*If left chevron is clicked, check that the current image isnt the first one in the list - if it isnt, cycle
	backwards until it is, then reset to the number of items in the list (-1 as the index is a count of the "li" and
	the bol_img_list is an array starting at 0)*/
	bol_left.click(function(){
		if(currentIndex > 0){
			currentIndex--;
			bol_curr_img.attr("src" , bol_img_list[currentIndex].src);
			bol_curr_img.attr("alt", bol_img_list[currentIndex].alt);
			bol_curr_title.html(bol_img_list[currentIndex].alt);
		}
		else {
			currentIndex = bol_img_list.length -1;
			bol_curr_img.attr("src" , bol_img_list[currentIndex].src);
			bol_curr_img.attr("alt", bol_img_list[currentIndex].alt);
			bol_curr_title.html(bol_img_list[currentIndex].alt);
		}
	});

});

//Deactivates the overlay
bol_overlay.click(function(){
	$(this).css({"visibility":"hidden"});
	$("#bol-lightbox").remove();
});

$("#bol-lightbox").click(function(){
	preventDefault();
})

// console.log(bol_img_list[0])