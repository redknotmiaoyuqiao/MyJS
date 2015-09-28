window.onload = function(){
	setPosition();
	
}


function setPosition(){
	//获取到页面的宽度
	var cparent = document.getElementById("container");
	var pageWidth = cparent.offsetWidth;

	
	var allContent = getClidElement(cparent,"box");

	var number = Math.floor(pageWidth/allContent[0].offsetWidth);

	//console.log(number);

	var BoxHeightArr = [];

	for(var i=0;i<allContent.length;i++){
		if(i>number-1){

			var minHeight = "5000";
			var minIndex = -1;

			for(var j=0;j<number;j++){
				var height = BoxHeightArr[j];
				if(minHeight>height){
					minHeight = height;
					minIndex = j;
				}
			}

			allContent[i].style.position = "absolute"; 
			allContent[i].style.top = minHeight + 10 + "px";

			allContent[i].style.left = allContent[minIndex].offsetLeft - 5 + "px";

			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + allContent[i].offsetHeight;


			console.log(allContent[minIndex].offsetHeight);
		}else{
			BoxHeightArr[i] = allContent[i].offsetHeight;
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