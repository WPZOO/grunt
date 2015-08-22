// https://github.com/jharding/grunt-exec
module.exports = {
	// Update WebTranslateIt translation - grunt exec:update_po_wti
	update_theme_po_wti: {
		cmd: 'wti pull',
		cwd: 'languages/'
	},
	po2mo: {
		cmd: '../grunt/po2mo.sh',
		cwd: 'languages/'
	}
};
