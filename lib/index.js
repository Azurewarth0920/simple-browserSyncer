var browserSync = require("browser-sync").create()

browserSync.init({
	server: "./"
});

browserSync.watch("./**/*.html").on("change", browserSync.reload)
browserSync.watch("./**/*.js").on("change", browserSync.reload)

browserSync.watch("./**/*.css", function (event, file) {
	if (event === "change") {
		browserSync.reload(file)
	}
})

browserSync.watch("./**/*.{gif,jpg,png,svg}", function (event, file) {
	browserSync.reload(file)
})
