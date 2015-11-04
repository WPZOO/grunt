// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	options: {
		sourcemap: 'none'
	},
	theme: {
		options: {
		},
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.sass %>',
				src: '*.scss',
				dest: '<%= pkg.directories.css %>',
				ext: '.css'
			}
		]
	},
	wpzoo: {
		options: {
		},
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.sass %>',
				src: 'style.scss',
				dest: '<%= pkg.directories.css %>',
				ext: '.css'
			}
		]
	}
//	editorstyle: {
//		options: {
//			sourcemap: 'none'
//		},
//		files: [
//			{
//				expand: true,
//				cwd: '<%= pkg.directories.sass %>',
//				src: 'editor-style.scss',
//				dest: '',
//				ext: '.css'
//			}
//		]
//	}
};
