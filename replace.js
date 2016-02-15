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
				'!fonts/**',
				'!updater/**',
				'!**/*.min.*',
				'!.gitignore',
				'!.gitmodules',
				'!package.json',
				'!composer.json',
				'!Gruntfile.js',
				'!screenshot.png',
				'!**/*{mo,po,pot}',
				'!page-templates/page-fullwidth.php',
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
					match: /penguin-gold/g,
					replacement: 'penguin'
				},
				{
					match: /' \. \$suffix \. '/g,
					replacement: ''
				},
				{
					match: /\tload_theme_textdomain\( 'penguin-gold', .*'\/languages' \);[\n\s\r]{1}/g,
					replacement: ''
				},
				{
					match: /\t\$minified[^]+\( 1 == \$minified \) \? '\.min' : '';[\n\s\r]{2}\$fluidvids = get_theme_mod\( 'fluidvids', true \);[\n\s\r]{1}/g,
					replacement: ''
				},
				{
					match: /\tif \( 1 == \$fluidvids, true \) {[\n\s\r]{2}([^]+?)\t}[\n\s\r]{1}/g,
					replacement: '$1'
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
