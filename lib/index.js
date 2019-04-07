const browserSync = require("browser-sync").create()
const path = require('path')

const defaultOptions = {
	port: 3000,
  directory: './'
}

function applyDefaults(options) {
  const res = {}
  Object.keys(options).forEach(key => {
    res[key] = options[key] || defaultOptions[key]
  })
  return res
}

const getAbsolutePath = (relativePath) => path.resolve(relativePath)

function simpleSyncer (rawOptions) {
	const option = applyDefaults(rawOptions)

	browserSync.init({
		server: getAbsolutePath(option.directory),
		port: option.port
	});

	browserSync.watch(`${getAbsolutePath(option.directory)}**/*.html`).on("change", browserSync.reload)
	browserSync.watch(`${getAbsolutePath(option.directory)}**/*.js`).on("change", browserSync.reload)

	browserSync.watch(`${getAbsolutePath(option.directory)}**/*.css`, function (event, file) {
		if (event === "change") {
			browserSync.reload(file)
		}
	})

	browserSync.watch(`${getAbsolutePath(option.directory)}**/*.{gif,jpg,png,svg}`, function (event, file) {
		browserSync.reload(file)
	})
}

module.exports = simpleSyncer
