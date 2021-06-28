/*********************************************
************* GLOBAL REQUIRE *****************
*********************************************/
const gulp = require('gulp')
const scss = require('gulp-sass')
const size = require('gulp-size')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const rename = require("gulp-rename")
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const svgSprite = require('gulp-svg-sprite')
const minifycss = require('gulp-minify-css')
const sourcemaps = require('gulp-sourcemaps')
const livereload = require('gulp-livereload')
const autoprefixer = require('gulp-autoprefixer')
const accessibility = require('gulp-accessibility')
const bro = require('gulp-bro')
const purgecss = require('gulp-purgecss')

/**********************************************
*********** GULP CUSTOM CONFIGURATION *********
**********************************************/
const paths = require('./gulp-config')
production = true

/**********************************************
************ ERROR HANDLING *******************
**********************************************/
function onError(error) {
    console.log(error)
    notify.onError({
        title: 'Gulp',
        subtitle: 'Compilation Error',
        message: '[<%= error.name %>] <%= error.message %>',
        sound: 'Beep'
    })(error)
    this.emit('end')
}

/**********************************************
***************** CLEAN ***********************
**********************************************/
gulp.task('clean', function () {
    return gulp.src(paths.development.root, { read: false, allowEmpty: true })
        .pipe(clean());
});

/**********************************************
*********** ACCESSIBILITY *********************
**********************************************/
gulp.task('accessibility', function () {
    return gulp.src('./*.html')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(accessibility({
            force: true
        }))
        .on('error', console.log)
        .pipe(accessibility.report({ reportType: 'txt' }))
        .pipe(rename({
            extname: '.txt'
        }))
        .pipe(gulp.dest('reports/txt'));
});

/*************************************************
***************** STYLESHEETS ********************
*************************************************/
gulp.task("styles", async () => {
    gulp
        .src(`${paths.src.scss}/*.scss`)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(purgecss({content: ['**/*.html']}))
        .pipe(gulp.dest('app.css'))
        .pipe(minifycss())
        .pipe(autoprefixer("last 5 versions"))
        .pipe(sourcemaps.write('.'))
        .pipe(size({ title: 'css' }))
        .pipe(gulp.dest(paths.development.scss))
        .pipe(livereload({ start: true }))
});

/*************************************************
***************** JAVASCRIPT *********************
*************************************************/
// gulp.task('javascript', () =>
//     gulp.src(`${paths.src.js}/*.js`)
//         .pipe(plumber({ errorHandler: onError }))
//         .pipe(babel({ presets: ['@babel/env'] }))
//         .pipe(uglify())
//         .pipe(size({ title: 'javascript' }))
//         .pipe(gulp.dest(paths.development.js))
//         .pipe(livereload({ start: true }))
// );
gulp.task('javascript', () =>
    gulp.src(`${paths.src.js}/*.js`)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(bro({
            error: 'emit',
            transform: [
                ['babelify', { presets: ['@babel/preset-env'], plugins: ['transform-class-properties'] }],
                ['browserify-shim', { global: true }]
            ]
        }))
        .pipe(uglify())
        .pipe(size({ title: 'javascript' }))
        .pipe(gulp.dest(paths.development.js))
        .pipe(livereload({ start: true }))
);

/*************************************************
***************** IMAGES *************************
*************************************************/
gulp.task('images', () =>
    gulp.src(`**/*.{svg,jpg,gif,png}`, { cwd: `${paths.src.img}` })
        .pipe(plumber({ errorHandler: onError }))
        .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
        .pipe(size({ title: 'images' }))
        .pipe(gulp.dest(paths.development.img))
        .pipe(livereload({ start: true }))
)

/****************************************************
***************** WATCH/LIVERELOAD ******************
****************************************************/
gulp.task('watch', () => {
    livereload.listen();
    gulp.watch(`${paths.src.scss}/*.scss`, gulp.series('styles'));
    gulp.watch(`${paths.src.js}/*.js`, gulp.series('javascript'));
    gulp.watch(`${paths.src.img}/**/*.{svg,jpg,gif,png}`, gulp.series('images'));
});

/****************************************************
***************** DEFAULT COMPILE *******************
****************************************************/
gulp.task("default",
    gulp.series("clean", "styles", "javascript", "images", "watch")
);


