/**
 * Created by kailin on 2016/5/15.
 */
var slideView = Bricks.extend({
    el:'.pa-slide',
    initialize: function (data) {
        var slideData = {
            data:data
        }
        this.render(slideData);
        this.$el.slider({
            left_btn:'.left-btn',
            right_btn:'.right-btn',
            control_li:'.circle-box li',
            li_on_class:'on',
            img_element:'.slide-img',
            auto_play:'true',
            time:'2000'
        });
    },
    render: function (data) {
        this.$el.html(ZGXYClode.templates.slide(data));
    }
});