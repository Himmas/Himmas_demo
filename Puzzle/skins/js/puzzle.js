$(function(){
	var len=30;
	for(var i=0;i<=len;i++){
		var html='';
		html="<div class='_puzzle whale'><i class='puzzle'></i></div>";
		$('.content').append(html);
		_setInterval();
	}
});
function _setInterval(){
	var _set=setInterval(function(){
		if($("._puzzle").hasClass("tamarin")){
		    $("._puzzle").removeClass("tamarin").addClass("xx");
		}else{
		    $("._puzzle").addClass("tamarin").removeClass("xx");
		}
	},5000);
}

