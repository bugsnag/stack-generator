module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/stackframe/dist/stackframe.js',
            'stack-generator.js',
            'spec/spec-helper.js',
            'spec/*-spec.js'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        //browsers: ['Firefox', 'ChromeCanary', 'Opera', 'Safari'],
        browsers: ['PhantomJS2'],
        singleRun: false
    });
};
