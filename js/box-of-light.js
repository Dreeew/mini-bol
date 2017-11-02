//Gets container
let bol_container = $(".bol-container");

bol_container.find("ul li").click(function(){
	$("#bol-overlay").css({"visibility":"visible"});
})

$("#bol-overlay").click(function(){
	$(this).css({"visibility":"hidden"})
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


