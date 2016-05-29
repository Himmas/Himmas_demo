/**
 * Created by kailin on 2016/5/15.
 */
(function($){
    $.fn.slider = function(obj){
        var $left_btn = $(obj.left_btn);
        var $right_btn = $(obj.right_btn);
        var control_arr = $(obj.control_li);
        var on_class = obj.li_on_class;
        var img_arr = $(obj.img_element);
        var img_count = img_arr.length;
        var $slide_body = $(obj.slide_box);
        var nowIndex = 0;
        var $slide_box = $(this);
        var t;
        function autoPlay(){
            turnNext();
        }
        if(obj.auto_play){
            t = setInterval(autoPlay,obj.time);
        }
        function turnTo(index){
            if (index<0 || index>=img_count) {
                console.error("there are no more pages");
                return false
            }
            setStyle(index);
            nowIndex = index;
        }
        function setStyle(index){
            $slide_body.animate({'left':-index*100+'%'},500);
            control_arr.each(function () {
                if($(this).index() == index)
                    $(this).addClass(on_class);
                else $(this).removeClass(on_class);
            });
        }
        control_arr.on("click", function () {
            var index = $(this).index();
            turnTo(index);
        })
        $right_btn.on("click", function () {
            turnNext();
        })
        $left_btn.on("click", function () {
            turnPrev();
        })
        $slide_box.hover(function () {
            clearInterval(t);
        }, function () {
            t = setInterval(autoPlay,obj.time);
        })
        function turnNext(){
            if(nowIndex == img_count-1) turnTo(0);
            else turnTo(nowIndex+1);
        }
        function turnPrev(){
            if(nowIndex == 0) turnTo(img_count-1);
            else turnTo(nowIndex-1);
        }

    };
})(jQuery);