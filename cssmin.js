// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		report: 'gzip'
	},
	style: {
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
