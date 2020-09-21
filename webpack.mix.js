let mix = require('laravel-mix');

require('laravel-mix-imagemin');

// Copy all files within `resources` matching `img/**.*` into the public path, preserving the file tree.
// Minify all images, `optipng` with `optimizationLevel` 5, disabling `jpegtran`, and adding `mozjpeg`.
mix
    .imagemin(
        'img/**.*',
        {
            context: 'resources',
        },
        {
            optipng: {
                optimizationLevel: 100
            },
            jpegtran: null,
            plugins: [
                require('imagemin-mozjpeg')({
                    quality: 50, // Chnage as you want
                    progressive: true,
                }),
            ],
        }
    );