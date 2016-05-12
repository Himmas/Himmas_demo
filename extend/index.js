/**
 * Created by kylin on 2016/5/12.
 */
var Bricks = function (options) {
    options.$el = $(options.el);
    Bricks.prototype.addEvent = function (eventObj) {
        var findFunc = function (k){
            return function (e) {
                options[eventObj[k]](e);
            }
        }
        for(k in eventObj){
            var eventArr = k.split(' ');
            var eventType = eventArr[0];
            var selector = eventArr[1];
            options.$el.on(eventType,selector,findFunc(k));
        }
    };
    if(options.initialize) options.initialize();
    if(options.events) this.addEvent(options.events);
};




var Brick = new Bricks({
    el:'.test1',
    template:'<div class="yezi">xx</div><h1>这是test1</h1>',
    initialize: function () {
        this.$el.append(this.template);
    },
    test: function () {
        alert(23);
    },
    events:{
        'click .yezi':'changeText',
        'click h1':'clickH1'
    },
    changeText: function (e) {
        console.log(e.currentTarget);
        alert(200);
        this.yezi();
    },
    clickH1:function (){
        alert('h1');
    },
    yezi: function () {
        alert(this.el);
    }
});
var Brick = new Bricks({
    el:'.test2',
    template:'<h1>这是test2</h1>',
    initialize: function () {
        this.$el.append(this.template);
    },
    test: function () {
        alert(23);
    }
});


