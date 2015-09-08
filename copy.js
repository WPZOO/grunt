// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	theme_lite: {
		expand: true,
		src: [
			'**',
			'!node_modules/**',
			'!grunt/**',
			'!sass/**',
			'!.gitignore',
			'!.gitmodules',
			'!package.json',
			'!composer.json',
			'!Gruntfile.js'
		],
		dest: '<%= pkg.directories.lite %>'
	}
};
