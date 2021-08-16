const mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .alias({ '@': 'resources/js' })
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
