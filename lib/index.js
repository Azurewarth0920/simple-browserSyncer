const browserSync = require("browser-sync").create()
const path = require('path')

const defaultOptions = {
	port: 3000,
	directory: path.resolve('./')
}

function applyDefaults(options) {
	const res = {}
	Object.keys(options).forEach(key => {
		res[key] = options[key] || defaultOptions[key]
	})
	return res
}

function simpleSyncer (rawOptions) {
	const option = applyDefaults(rawOptions)

	browserSync.init({
		server: option.directory,
		port: option.port
	});

	const joinPath = (filesPath) => path.join(option.directory, filesPath)

	browserSync.watch(joinPath('/**/*.(html|js|json|xml)')).on("change", browserSync.reload)

	path.resolve(option.directory, '/**/*.css')
	browserSync.watch(joinPath('/**/*.css'), function (event, file) {
		if (event === "change") {
			browserSync.reload(file)
		}
	})

	browserSync.watch(joinPath('/**/*.(gif|jpg|png|svg)'), function (event, file) {
		browserSync.reload(file)
	})
}

module.exports = simpleSyncer
