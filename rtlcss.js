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
		expand : true,
		src: 'style.css',
		dest: 'style-rtl.css'
	}
};
