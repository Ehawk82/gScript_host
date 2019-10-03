var myUI;

myUI = {
	init: function() {
		var page = createEle("div"),
			fsbtn = createEle("button");

		fsbtn.innerHTML = "🔲";
		fsbtn.onclick = openFullscreen();

		page.className = "page";
		page.append(fsbtn);
		//console.log("working js!");

		body.append(page);

		setTimeout(function(){
			makeFull(page);
		},0);
	}
};

window.onload = function(){
	myUI.init();
};