window.onload = function(){
	imgLocation("container","box");

	var imageDate = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};

	window.onscroll = function(){
		console.log("aaaaaaaaaaaaa");
		if(checkFlag()){
			var cparent = document.getElementById("container");
			for(var i=0;i<imageDate.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className = "box";

				cparent.appendChild(ccontent);

				var boximg  = document.createElement("div");
				boximg.className = "box_img";
				ccontent.appendChild(boximg);

				var img = document.createElement("img");
				img.src = "image/" + imageDate.data[i].src;

				boximg.appendChild(img);
			}

			imgLocation("container","box");
		}
	}
	
}

function checkFlag(){
	var cparent = document.getElementById("container");
	var ccontent = getClidElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;

	if(lastContentHeight < scrollTop + pageHeight){
		return true;
	}
}

function imgLocation(parent,content){
	var cparent = document.getElementById(parent);
	var ccontent = getClidElement(cparent,content);
	//console.log(ccontent);

	var imgWidth = ccontent[0].offsetWidth;

	var num = Math.floor(document.documentElement.clientWidth / imgWidth);

	cparent.style.cssText = "width:" + imgWidth * num + "px;margin: 0 auto";


	var BoxHeightArr = [];

	for(var i=0;i<ccontent.length;i++){
		if(i<num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
		}else{
			var minHeight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getMinHeightPosition(BoxHeightArr,minHeight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight + "px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";

			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
		}
	}
}

function getMinHeightPosition(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
}

function getClidElement(parent,content){
	var contentArr = [];
	var allContent = parent.getElementsByTagName("*");

	for(var i=0;i<allContent.length;i++){
		if(allContent[i].className == content){
			contentArr.push(allContent[i]);
		}
	}

	return contentArr;
}