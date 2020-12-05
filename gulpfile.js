const { src, dest } = require("gulp");
const loadPlugins = require("gulp-load-plugins"); //gulp-〇〇 系を自動で読み込む
const $ = loadPlugins(); // $に定義


const paths = {
	img: {
		src: "./img/**/**",
		dest: "./dist/img/",
	},
}

function img() {
	return src(paths.img.src)
		.pipe($.imagemin())
		.pipe(dest(paths.img.dest));
}

exports.img = img;