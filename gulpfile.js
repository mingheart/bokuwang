const gulp = require("gulp");
const pump = require("pump");
// const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync");
const minifyCss = require("gulp-clean-css");
const jspress = require('gulp-uglify');
const htmlpress = require('gulp-htmlmin');
const imagepress = require('gulp-imagemin');


let babel = require('gulp-babel');

//es6转es5
gulp.task('es6',function(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        'presets':['es2015']
    }))
    .pipe(gulp.dest('./dist/es5'));
});



//sass编译
// gulp.task("sass",function(){
// 	return	pump([
// 		gulp.src("./src/sass/*.scss"),
// 		sass({outputStyle:'expanded'}).on('error', sass.logError),
// 		gulp.dest('./src/css')
// 	])
// 	done();
// 	});
// //sass文件监听
// gulp.task("sassWatch",function(){
// 	return gulp.watch(['./src/sass/*.scss'],gulp.series('sass'));
// })
//gulp cssmin 之后压缩css
gulp.task('cssmin',function(cb){
	pump([
	gulp.src('src/css/*.css'),
	minifyCss(),
	gulp.dest('dist/css/')
	],cb
	)
})
//gulp htmlmin 压缩html
gulp.task('htmlmin',function(cb){
	pump([
	gulp.src('src/html/detail.html'),
	htmlpress(),
	gulp.dest('dist/html/')
	],cb
	)
})
// gulp jsmin
gulp.task('jsmin',function(cb){
	pump([
	gulp.src('dist/es5/*.js'),
	jspress(),
	gulp.dest('dist/js/')
	],cb
	)
})

// gulp jsmin jpg
gulp.task('jpgmin',function(cb){
	pump([
	gulp.src('src/img/*.jpg'),
	imagepress(),
	gulp.dest('dist/img/')
	],cb
	)
})
gulp.task('Cjpgmin',function(cb){
    pump([
    gulp.src('src/css/img/*.jpg'),
    imagepress(),
    gulp.dest('dist/css/img/')
    ],cb
    )
})
// gulp jsmin png
gulp.task('pngmin',function(cb){
	pump([
	gulp.src('src/img/*.png'),
	imagepress(),
	gulp.dest('dist/img/')
	],cb
	)
})
gulp.task('Cpngmin',function(cb){
    pump([
    gulp.src('src/css/img/*.png'),
    imagepress(),
    gulp.dest('dist/img/')
    ],cb
    )
})