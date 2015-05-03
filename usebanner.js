// https://github.com/mattstyles/grunt-banner
module.exports = {
	theme: {
		options: {
			position: 'top',
			banner: '/*\n' +
				'Theme Name:  <%= pkg.theme.name %>\n' +
				'Theme URI:   <%= pkg.theme.uri %>\n' +
				'Description: <%= pkg.theme.description %>\n' +
				'Author:      <%= pkg.theme.author %>\n' +
				'Author URI:  <%= pkg.theme.authoruri %>\n' +
				'Version:     <%= pkg.version %>\n' +
				'Tags:        <%= pkg.theme.tags %>\n' +
				'Text Domain: <%= pkg.theme.textdomain %>\n' +
				'Domain Path: <%= pkg.theme.domainpath %>\n' +
				'License:     <%= pkg.theme.license %>\n' +
				'License URI: <%= pkg.theme.licenseuri %>\n' +
				'*/\n'
		},
		files: {
			src: [ 'style.css' ]
		}
	},
	wpzoo: {
		options: {
			position: 'top',
			banner: '/*\n' +
				'Theme Name:  <%= pkg.theme.name %>\n' +
				'Theme URI:   <%= pkg.theme.uri %>\n' +
				'Description: <%= pkg.theme.description %>\n' +
				'Author:      <%= pkg.theme.author %>\n' +
				'Author URI:  <%= pkg.theme.authoruri %>\n' +
				'Template:    <%= pkg.theme.template %>\n' +
				'Version:     <%= pkg.version %>\n' +
				'Tags:        <%= pkg.theme.tags %>\n' +
				'Text Domain: <%= pkg.theme.textdomain %>\n' +
				'Domain Path: <%= pkg.theme.domainpath %>\n' +
				'License:     <%= pkg.theme.license %>\n' +
				'License URI: <%= pkg.theme.licenseuri %>\n' +
				'*/\n',
			linebreak: true
		},
		files: {
			src: [ 'style.css' ]
		}
	}
};