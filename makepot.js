// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	target: {
		options: {
			domainPath: '<%= pkg.theme.domainpath %>',
			updatePoFiles: true,
			potFilename: '<%= pkg.theme.textdomain %>.pot',
			exclude: [
				//'.*',
				'^((?!gold).)*.php$',
				'.sass-cache/.+',
				'.git/.+',
				'node_modules/.*',
				'template-parts/.*',
				'build/.*'
			],
			type: '<%= pkg.pot.type %>',
			potHeaders: {
				poedit: true,
				'x-poedit-keywordslist': true,
				'report-msgid-bugs-to': '<%= pkg.pot.reportmsgidbugsto %>',
				'last-translator': '<%= pkg.pot.lasttranslator %>',
				'language-team': '<%= pkg.pot.languageteam %>',
				'language': 'en_US'
			}
		}
	}
};
