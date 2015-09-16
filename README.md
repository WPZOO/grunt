# Standard Grunt System for Multiple Projects

1. Clone this repo to whichever project you need.
2. Create a `Gruntfile.js` with the standard
3. Define the variables in the `package.json`

## Requirements
You need to have Ruby installed (Included in OSX, [Windows Installer](http://rubyinstaller.org/)) for two of the tasks `sass` and `exec`.
- Sass requires the Sass gem `3.4.0` which can be installed by running `gem install sass` in cmd
- The exec task runs `wti pull` to update the translations which requires the `web_translate_it` gem which can be installed by running `gem install web_translate_it` in cmd.

## Sample `Gruntfile.js`

The `Gruntfile.js` is standard and can be used the same across multiple projects.
```js
/* global require, process */
module.exports = function( grunt ) {
	// Load Grunt plugin configurations
	require('load-grunt-config')(grunt, {
		data: {
			pkg: grunt.file.readJSON('package.json')
		}
	});
};
```

## Sample `package.json`

The `package.json` is where the project variables are defined. An example is:
```js
{
  "name": "penguin-gold",
  "capitalname": "PENGU!N Gold",
  "description": "WP Theme PENGU!N Gold",
  "author": "Stefan Brechbühl",
  "homepage": "https://wpzoo.ch/",
  "version": "1.0.0",
  "copyright": "2015",
  "license": "GPL-2.0+",
  "private": true,
  "contributors": [
    {
      "name": "WPZOO",
      "url": "wpzoo.ch"
    },
    {
      "name": "Stefan Brechbühl",
      "url": "pixelstrol.ch"
    },
    {
      "name": "Ulrich Pogson",
      "url": "ulrich.pogson.ch"
    }
  ],
  "directories": {
    "js": "./js",
    "sass": "./sass",
    "css": "",
    "build": "./build",
    "lite": "../penguin/"
  },
  "theme": {
    "name": "PENGU!N Gold",
    "uri": "http://wpzoo.ch/themes/penguin/",
    "description": "PENGU!N is a clean and modern WordPress theme made by WPZOO. Besides the link color the used colors are monochromatic. The post thumbnail will be used as a big header image on single post pages as well as Pages. These theme characteristics make it possible to use PENGU!N for bloggin' as well as a magazin theme.",
    "author": "WPZOO",
    "authoruri": "http://wpzoo.ch",
    "license": "GPL-2.0+",
    "licenseuri": "http://www.gnu.org/licenses/gpl-2.0.html",
    "textdomain": "penguin",
    "domainpath": "/languages",
    "tags": "black, blue, gray, white, light, one-column, two-columns, right-sidebar, left-sidebar, responsive-layout, accessibility-ready, custom-menu, featured-image-header,featured-images, post-formats, sticky-post, threaded-comments, translation-ready"
  },
  "bugs": {
    "url": "https://github.com/WPZOO/penguin-gold/issues",
    "email": "support@wpzoo.ch"
  },
  "pot": {
    "reportmsgidbugsto": "WPZOO Translations <translations@wpzoo.ch>",
    "lasttranslator": "WPZOO Translations <translations@wpzoo.ch>",
    "languageteam": "WPZOO Translations <translations@wpzoo.ch>",
    "type": "wp-theme"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/WPZOO/penguin-gold.git"
  },
  "devDependencies": {
    "grunt":                  "*",
    "grunt-banner":           "*",
    "grunt-checktextdomain":  "*",
    "grunt-contrib-copy":     "*",
    "grunt-contrib-cssmin":   "*",
    "grunt-contrib-imagemin": "*",
    "grunt-contrib-sass":     "*",
    "grunt-contrib-uglify":   "*",
    "grunt-contrib-watch":    "*",
    "grunt-exec":             "*",
    "grunt-newer":            "*",
    "grunt-potomo":           "*",
    "grunt-replace":          "*",
    "grunt-rtlcss":           "*",
    "grunt-wp-css":           "*",
    "grunt-wp-i18n":          "*",
    "load-grunt-config":      "*"
  }
}
```
