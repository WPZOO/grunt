// https://github.com/nDmitry/grunt-postcss
module.exports = {
	options: {
		processors: [
			require('autoprefixer')({
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Edge >= 12',
					'Explorer >= 7',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			})
		]
	},
	theme: {
		expand: true,
		cwd: '<%= pkg.directories.css %>',
		dest: '<%= pkg.directories.css %>',
		src: [
			'*.css',
			'!*.min.css'
		]
	},
	wpzoo: {
		src: 'style.css'
	}
};
