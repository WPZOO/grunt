// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	theme: {
		expand: true,
		cwd: '<%= pkg.directories.css %>',
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: '<%= pkg.directories.css %>',
		ext: '.min.css'
	},
};
