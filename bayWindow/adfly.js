var win = $(window);
var Fly = function(box) {
    if (!box || !box.length) return;

    this.box = box;
    this.close = box.find("i");
    this.boxWidth = box.outerWidth(true); //内容宽度
    this.boxHeight = box.outerHeight(true); //内容高度
    this.x = 0; //x轴起始位置
    this.y = 0; //y轴起始位置
    this.xin = 1; //x轴移动方向
    this.yin = 1; //y轴移动方向
    this.step = 1; //每次移动像素
    this.delay = 20; //动画延迟

    //事件
    win.bind("resize", $.proxy(this.resize, this));
    this.box.bind('mouseenter', $.proxy(this.mouseenter, this));
    this.box.bind('mouseleave', $.proxy(this.mouseleave, this));
    this.close.bind("click", $.proxy(this.destroy, this));

    //执行
    this.resize();
    this.mouseleave();
};
Fly.prototype.mouseenter = function() {
    clearInterval(this.timer);
};
Fly.prototype.mouseleave = function() {
    this.timer = setInterval($.proxy(this.move, this), this.delay);
};
Fly.prototype.resize = function() {
    this.X = win.width() - this.boxWidth;
    this.Y = win.height() - this.boxHeight;
};
Fly.prototype.move = function() {
    this.box.css("left", this.x);
    this.box.css("top", this.y);

    //x轴移动
    this.x = this.x + this.step * this.xin;
    if (this.x < 0) {
        this.xin = 1;
        this.x = 0;
    } else if (this.x > this.X) {
        this.xin = -1;
        this.x = this.X;
    }

    //y轴移动
    this.y = this.y + this.step * this.yin;
    if (this.y < 0) {
        this.yin = 1;
        this.y = 0;
    } else if (this.y > this.Y) {
        this.yin = -1;
        this.y = this.Y;
    }
};
Fly.prototype.destroy = function() {
    win.unbind("resize", $.proxy(this.resize, this));
    this.box.unbind('mouseenter', $.proxy(this.mouseenter, this));
    this.box.unbind('mouseleave', $.proxy(this.mouseleave, this));
    this.close.unbind("click", $.proxy(this.destroy, this));

    this.box.remove();
    this.close = null;
    this.box = null;
};
new Fly(box);