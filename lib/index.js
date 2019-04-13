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

	browserSync.watch(`${option.directory}**/*.(html|js|json|xml)`).on("change", browserSync.reload)

	browserSync.watch(`${option.directory}**/*.css`, function (event, file) {
		if (event === "change") {
			browserSync.reload(file)
		}
	})

	browserSync.watch(`${option.directory}**/*.(gif|jpg|png|svg)`, function (event, file) {
		browserSync.reload(file)
	})
}

module.exports = simpleSyncer
