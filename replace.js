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
				'!inc/extras-penguin-gold.php'
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
					match: /\/\*[\n\s\r\*]{5}PENGU!N extras[^]+extras-penguin-gold\.php';[\n\s\r]{2}/,
					replacement: ''
				}
			]
		}
	}
};
