const ts = require("gulp-typescript");

/**
 * Add typescript compiler gulp task
 * @param gulp required to add task
 * @param config the task options with the following attributes
 * tsconfig: the path to the tsconfig.json file
 * buildDirectory: the compiled .js objects destination
 */
module.exports = function (gulp, config) {
    config.tscongif = config.tscongif || "./tsconfig.json";
    config.buildDirectory = config.buildDirectory || 'dist';

    const tsProject = ts.createProject(config.tscongif);

    gulp.task('typescript', () => {
        return gulp.src('./public/**/*.ts')
            .pipe(tsProject())
            .js
            .pipe(gulp.dest(config.buildDirectory));
    });
};