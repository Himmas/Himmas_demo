$(function(){
	var len=33;
	for(var i=0;i<=len;i++){
		var html='';
		html="<div class='_puzzle whale'><i class='puzzle'></i></div>";
		$('#content').append(html);
//		_setInterval();
	}
});
var i=1;
function btn_l(){
	console.log(i);
	if(i==1){
		$("._puzzle").removeClass("whale").addClass("tamarin");
	}else if(i==2){
		$("._puzzle").removeClass("tamarin").addClass("frog");
	}else if(i==3){
		$("._puzzle").removeClass("frog").addClass("whale");
	}
	i++;
	console.log(i);
}

