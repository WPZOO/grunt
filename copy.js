// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	theme_lite: {
		expand: true,
		src: [
			'screenshot.png'
		],
		dest: '<%= pkg.directories.lite %>'
	}
};
