// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	options: {
		force: true,
		style: 'expanded',
		trace: true,
		lineNumbers: true
	},
	theme: {
		options: {
		},
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.sass %>',
				src: 'style.scss',
				dest: '',
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
				dest: 'css',
				ext: '.css'
			}
		]
	}
//	editorstyle: {
//		options: {
//			sourcemap: 'none',
//			lineNumbers: false
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
