var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var PATH = {
	LESS:"less/*.less",
	CSS:"css/*.css",
	HTML:"index.html",
	JS:'js/*.js'
};

//给css加浏览器前缀
gulp.task('prefix',function(){
	return gulp.src(PATH.CSS)
	           .pipe(plugins.autoprefixer())
	           .pipe(gulp.dest('css'))
	           .pipe(browserSync.reload({stream:true}));
});

//静态服务器+监听css/html文件
gulp.task('server',['prefix'],function(){
	browserSync.init({
		server:{
			files:"**",
			baseDir:"./"
		}
	});
	
	gulp.watch(PATH.CSS,['prefix']);
	gulp.watch(PATH.CSS).on('change',browserSync.reload);
	gulp.watch(PATH.HTML).on('change',browserSync.reload);
	gulp.watch(PATH.JS).on('change',browserSync.reload);
});

//默认任务
gulp.task('default',['server']);
