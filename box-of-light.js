//Gets container
let bol_container = $(".bol-container");
let bol_overlay = $("#bol-overlay");

//Detects click on an image item and activates the overlay
bol_container.find("ul li img").click(function(){
	bol_overlay.css({"visibility":"visible"});

	//Creates lightbox and assigns it to a variable
	bol_container.prepend('<div id="bol-lightbox"></div>');
	bol_lightbox = $("#bol-lightbox");

	bol_lightbox.append('<div id="bol-lightbox-title">Sample Text Here</div>')
	bol_lightbox.append('<img src="img/1.jpg" alt="test">');



});

//Deactivates the overlay
bol_overlay.click(function(){
	$(this).css({"visibility":"hidden"});
	$("#bol-lightbox").remove();
});

$("#bol-lightbox").click(function(){
	preventDefault();
})

/*** Create Array of Images***/
//Finds all img tags
let bol_list_array = bol_container.find("ul li img");

//declares img array
let bol_img_list = [];

//assigns the source of each image to the array
for(i=0; i<bol_list_array.length; i++){
	bol_img_list.push(bol_list_array[i].src);
}


