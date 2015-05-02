// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
	options: {
	},
	wpzoo: {
		src: [
			'css/style.css',
			'css/wpzoo.css',
			'css/column.css'
		],
		dest: 'style.css',
	},
};
