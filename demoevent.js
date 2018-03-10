var h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function(){
	h1.classList.add("color2");
});
h1.addEventListener("mouseout", function(){
	h1.classList.remove("color2")
});
var lis = document.querySelectorAll("li");
for(var i =0; i<lis.length;i++){
	lis[i].addEventListener("mouseover",function(){
		this.classList.add("color1")
	});
	lis[i].addEventListener("mouseout",function(){
		this.classList.remove("color1")
	});
}