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
	if(i==1){
		$("._puzzle").removeClass("whale").addClass("tamarin");
	}else if(i==2){
		$("._puzzle").removeClass("tamarin").addClass("frog");
	}else if(i==3){
		$("._puzzle").removeClass("frog").addClass("owl");
	}else if(i==4){
		$("._puzzle").removeClass("owl").addClass("crow");
	}else if(i==5){
		$("._puzzle").removeClass("crow").addClass("turtle");
	}else if(i==6){
		$("._puzzle").removeClass("turtle").addClass("oryx");
	}else if(i==7){
		$("._puzzle").removeClass("oryx").addClass("iguana");
	}else if(i==8){
		$("._puzzle").removeClass("iguana").addClass("seahorse");
	}else if(i==9){
		$("._puzzle").removeClass("seahorse").addClass("armadillo");
	}else if(i==10){
		$("._puzzle").removeClass("armadillo").addClass("sloth");
	}else if(i==11){
		$("._puzzle").removeClass("sloth").addClass("kakapo");
	}else if(i==12){
		$("._puzzle").removeClass("kakapo").addClass("echidna");
	}else if(i==13){
		$("._puzzle").removeClass("echidna").addClass("penguin");
	}else if(i==14){
		$("._puzzle").removeClass("penguin").addClass("damselfly");
	}else if(i==15){
		$("._puzzle").removeClass("damselfly").addClass("bear");
	}else if(i==16){
		$("._puzzle").removeClass("bear").addClass("parrotfish");
	}else if(i==17){
		$("._puzzle").removeClass("parrotfish").addClass("camel");
	}else if(i==18){
		$("._puzzle").removeClass("camel").addClass("butterfly");
	}else if(i==19){
		$("._puzzle").removeClass("butterfly").addClass("ostrich");
	}else if(i==20){
		$("._puzzle").removeClass("ostrich").addClass("panda");
	}else if(i==21){
		$("._puzzle").removeClass("panda").addClass("tapir");
	}else if(i==22){
		$("._puzzle").removeClass("tapir").addClass("sifaka");
	}else if(i==23){
		$("._puzzle").removeClass("sifaka").addClass("lynx");
	}else if(i==24){
		$("._puzzle").removeClass("lynx").addClass("rhino");
	}else if(i==25){
		$("._puzzle").removeClass("rhino").addClass("peccary");
	}else if(i==26){
		$("._puzzle").removeClass("peccary").addClass("okapi");
	}else if(i==27){
		$("._puzzle").removeClass("okapi").addClass("loris");
	}else if(i==28){
		$("._puzzle").removeClass("loris").addClass("hirola");
	}else if(i==29){
		$("._puzzle").removeClass("hirola").addClass("drill");
	}else if(i==30){
		i=1;
		$("._puzzle").removeClass("drill").addClass("whale");
		return;
	}
	i++;
}
function btn_r(){
	if(i==1){
		$("._puzzle").removeClass("whale").addClass("drill");
		i=30;
		return;
	}else if(i==30){
		$("._puzzle").removeClass("drill").addClass("hirola");
	}else if(i==29){
		$("._puzzle").removeClass("hirola").addClass("loris");
	}else if(i==28){
		$("._puzzle").removeClass("loris").addClass("okapi");
	}else if(i==27){
		$("._puzzle").removeClass("okapi").addClass("peccary");
	}else if(i==26){
		$("._puzzle").removeClass("peccary").addClass("rhino");
	}else if(i==25){
		$("._puzzle").removeClass("rhino").addClass("lynx");
	}else if(i==24){
		$("._puzzle").removeClass("lynx").addClass("sifaka");
	}else if(i==23){
		$("._puzzle").removeClass("sifaka").addClass("tapir");
	}else if(i==22){
		$("._puzzle").removeClass("tapir").addClass("panda");
	}else if(i==21){
		$("._puzzle").removeClass("panda").addClass("ostrich");
	}else if(i==20){
		$("._puzzle").removeClass("ostrich").addClass("butterfly");
	}else if(i==19){
		$("._puzzle").removeClass("butterfly").addClass("camel");
	}else if(i==18){
		$("._puzzle").removeClass("camel").addClass("parrotfish");
	}else if(i==17){
		$("._puzzle").removeClass("parrotfish").addClass("bear");
	}else if(i==16){
		$("._puzzle").removeClass("bear").addClass("damselfly");
	}else if(i==15){
		$("._puzzle").removeClass("damselfly").addClass("penguin");
	}else if(i==14){
		$("._puzzle").removeClass("penguin").addClass("echidna");
	}else if(i==13){
		$("._puzzle").removeClass("echidna").addClass("kakapo");
	}else if(i==12){
		$("._puzzle").removeClass("kakapo").addClass("sloth");
	}else if(i==11){
		$("._puzzle").removeClass("sloth").addClass("armadillo");
	}else if(i==10){
		$("._puzzle").removeClass("armadillo").addClass("seahorse");
	}else if(i==9){
		$("._puzzle").removeClass("seahorse").addClass("iguana");
	}else if(i==8){
		$("._puzzle").removeClass("iguana").addClass("oryx");
	}else if(i==7){
		$("._puzzle").removeClass("oryx").addClass("turtle");
	}else if(i==6){
		$("._puzzle").removeClass("turtle").addClass("crow");
	}else if(i==5){
		$("._puzzle").removeClass("crow").addClass("owl");
	}else if(i==4){
		$("._puzzle").removeClass("owl").addClass("frog");
	}else if(i==3){
		$("._puzzle").removeClass("frog").addClass("tamarin");
	}else if(i==2){
		$("._puzzle").removeClass("tamarin").addClass("whale");
	}
	i--;
}


