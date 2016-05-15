/**
 * Created by kylin on 2016/5/12.
 */

var _ = {};

_.extend = function (target, source) {
    for (var p in source) {
        if (source.hasOwnProperty(p)) {
            target[p] = source[p];
        }
    }

    return target;
};
var Bricks = function (options) {
    this._ensureElement();
    this.initialize.apply(this, arguments);
};
_.extend(Bricks.prototype,{
    initialize: function(){},

    render: function() {
        return this;
    },
    _ensureElement: function(el) {
        this.$el = $(this.el);
        this.delegateEvent(this.events);
    },
    delegateEvent:function(eventObj){
        var _this = this;
        var findFunc = function (k){
            return function (e) {
                _this[eventObj[k]](e);
            }
        }
        for(k in eventObj){
            var eventArr = k.split(' ');
            var eventType = eventArr[0];
            var selector = eventArr[1];
            this.$el.on(eventType,selector,findFunc(k));
        }
    }

});

var extend = function(protoProps, classProps) {
    return inherits(this, protoProps, classProps);
};
var inherits = function(parent, protoProps, staticProps) {
    var child;
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function(){ parent.apply(this, arguments); };
    }
    _.extend(child, parent);

    var ctor = function () {};

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    if (protoProps) _.extend(child.prototype, protoProps);

    if (staticProps) _.extend(child, staticProps);

    child.prototype.constructor = child;

    child.__super__ = parent.prototype;

    return child;
}

Bricks.extend = extend;

//-----------------------------------------------------------------------------------





var Brick = Bricks.extend({
    el:'.test1',
    template:'<div class="yezi">xx</div><h1>这是test1</h1>',
    initialize: function () {
        console.log(this);
        this.$el.append(this.template);
        //this.test();
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
console.log(new Brick());
var Brick1 = Bricks.extend({
    el:'.test2',
    template:'<h1>这是test2</h1>',
    initialize: function () {
        this.$el.append(this.template);
        this.test();
    },
    test: function () {
        //alert(45);
    }
});
console.log(new Brick1());

