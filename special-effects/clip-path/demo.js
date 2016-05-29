/**
 * Created by admin on 2015/11/29.
 */
$(document).ready(function(){
    $("button").click(function () {
        if($(".a").hasClass("aa")){
            $(".a").removeClass("aa").addClass("xx");
        }
        else{
            $(".a").addClass("aa").removeClass("xx");
        }

    })
});