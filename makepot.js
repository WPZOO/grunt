// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	target: {
		options: {
			domainPath: '<%= pkg.theme.domainpath %>',
			updatePoFiles: true,
			exclude: ['build/.*', 'node_modules/.*'],
			type: '<%= pkg.pot.type %>',
			potHeaders: {
				poedit: true,
				'report-msgid-bugs-to': '<%= pkg.pot.reportmsgidbugsto %>',
				'last-translator': '<%= pkg.pot.lasttranslator %>',
				'language-team': '<%= pkg.pot.languageteam %>',
				'language': 'en_US'
			}
		}
	}
};
