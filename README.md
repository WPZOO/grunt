== Standard Grunt system for multiple pojects

1. Clone this repo to whichever project you need.
2. Create a `Gruntfile.js` with the standard
3. Define the variables in the `package.json`

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
    "build": "./build"
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
    "grunt": "*",
    "load-grunt-config": "*",
    "grunt-checktextdomain": "*",
    "grunt-contrib-imagemin": "*",
    "grunt-contrib-sass": "*",
    "grunt-wp-css": "*",
    "grunt-cssjanus": "*",
    "grunt-contrib-cssmin": "*",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-watch": "*",
    "grunt-wp-i18n": "*",
    "grunt-newer": "*",
    "grunt-potomo": "*",
    "grunt-exec": "*"
  }
}
```
