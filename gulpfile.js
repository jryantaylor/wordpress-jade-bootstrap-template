/*
* Basic Gulp.js workflow
* for simple front-end projects
* author: Aaron John Schlosser
* homepage: http://www.aaronschlosser.com
* github: http://www.github.com/ajschlosser
*/

// var gulp				= require("gulp"),
// 	gutil				= require("gulp-util"),
// 	watch				= require("gulp-watch"),
// 	compass				= require("gulp-compass"),
// 	jade				= require("gulp-jade-php"),
// 	plumber				= require("gulp-plumber");

// var paths = {
// 	styles: {
// 		src: "./scss/**/*.scss",
// 		dest: "stylesheets"
// 	},
// 	templates: {
// 		src: "./templates/*.jade",
// 		dest: "./"
// 	}
// };

// function handleError(err) {
// 	console.log(err.toString());
// 	this.emit('end');
// }

// gulp.task("styles", function() {
// 	return gulp.src(paths.styles.src)
// 		.pipe(plumber())
// 		.pipe(compass({
// 			config_file: "./config.rb",
// 			css: "stylesheets",
// 			sass: "scss",
// 			image: "./images",
// 			import_path: "./bower_components"
// 		}))
// 		.on("error", handleError)
// 		.pipe(plumber.stop())
// 		.pipe(gulp.dest(paths.styles.dest));
// });

// gulp.task("templates", function() {
// 	gulp.src(paths.templates.src)
// 		.pipe(plumber())
// 		.pipe(jade({
// 			pretty: '\t'	// Set to false to minify/uglify the PHP
// 		}))
// 		.pipe(plumber.stop())
// 		.pipe(gulp.dest(paths.templates.dest));
// });

// gulp.task("default", function() {
// 	gulp.watch(paths.styles.src, ["styles"]);
// 	gulp.watch(paths.templates.src, ["templates"]);
// });

var gulp = require('gulp');
var watch = require("gulp-watch");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require("gulp-jade-php");
var plumber = require("gulp-plumber");

var paths = {
	styles: {
		src: "./scss/*.scss",
		dest: "stylesheets"
	},
	templates: {
		src: "./templates/*.jade",
		dest: "./"
	}
};

gulp.task('styles', function() {
    return gulp.src('./scss/*.scss')
	    .pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	    .pipe(gulp.dest('./stylesheets'));
});

gulp.task("templates", function() {
	gulp.src(paths.templates.src)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t'	// Set to false to minify/uglify the PHP
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest(paths.templates.dest));
});

gulp.task("default", function() {
	gulp.watch(paths.styles.src, ["styles"]);
	gulp.watch(paths.templates.src, ["templates"]);
});