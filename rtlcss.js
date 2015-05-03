// https://github.com/MohammadYounes/grunt-rtlcss
module.exports = {
	'theme':{
		options:{
			// rtlcss options
			config:{
			},
			// extend rtlcss rules
			rules:[],
			// extend rtlcss declarations
			declarations:[],
			// extend rtlcss properties
			properties:[],
		},
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.css %>',
				src: 'style.css',
				dest: '<%= pkg.directories.css %>',
				ext: '-rtl.css'
			}
		]
	}
};
