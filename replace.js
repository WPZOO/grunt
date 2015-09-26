// https://github.com/outatime/grunt-replace
module.exports = {
	penguin_lite: {
		files: [ {
			expand: true,
			// Include and exlcude files
			src: [
				'**',
				'!node_modules/**',
				'!grunt/**',
				'!sass/**',
				'!.gitignore',
				'!.gitmodules',
				'!package.json',
				'!composer.json',
				'!Gruntfile.js',
				'!screenshot.png',
				'!page-fullwidth.php',
				'!inc/extras-penguin-gold.php',
				'!inc/customizer-options-gold.php',
				'!inc/customizer-styles-gold.php'
			],
			dest: '<%= pkg.directories.lite %>'
		} ],
		options: {
			detail: true,
			usePrefix: false,
			// Define the search and replace patterns
			patterns: [
				{
					match: /PENGU!N Gold/g,
					replacement: 'PENGU!N'
				},
				{
					match: /require get_template_directory\(\) \. '\/inc\/extras-penguin-gold\.php';[\n\s\r]{1}/,
					replacement: ''
				},
				{
					match: /require get_template_directory\(\) \. '\/inc\/customizer-options-gold\.php';[\n\s\r]{1}/,
					replacement: ''
				},
				{
					match: /require get_template_directory\(\) \. '\/inc\/customizer-styles-gold\.php';[\n\s\r]{1}/,
					replacement: ''
				},
//				{
//					match: /\/\*[\n\s\r\*]{5}PENGU!N extras[^]+extras-penguin-gold\.php';[\n\s\r]{2}/,
//					replacement: ''
//				}
			]
		}
	}
};
