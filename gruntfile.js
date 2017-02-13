module.exports = function(grunt) {
    'use strict';

    // ---------------------------------------------------------------------------------------------------------- Banner

    function getBanner() {
        return '/*! <%= pkg.name %> - <%= pkg.description %> - Version: <%= pkg.version %> */\n';
    }

    // ----------------------------------------------------------------------------------------------------------- Grunt

    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        concat : {
            dist : {
                options : {
                    banner : getBanner()
                },
                src  : ['src/js/sidebar.js'],
                dest : 'dist/js/sidebar.js'
            }
        },
        jsdoc : {
            dist : {
                options: {
                    private   : false,
                    template  : "node_modules/ink-docstrap/template",
                    configure : "jsdoc.json"
                },
                src  : ['src/js/sidebar.js'],
                dest : 'doc'
            }
        },
        sass : {
            dev : {
                options: {
                    style     : 'expanded',
                    sourcemap : 'none',
                    debugInfo : false
                },
                files: [{
                    expand : true,
                    cwd    : 'src/scss/',
                    src    : ['**/*.scss'],
                    dest   : 'dist/css/',
                    ext    : '.css'
                }]
            },
            dist : {
                options: {
                    style     : 'compressed',
                    sourcemap : 'auto'
                },
                files: [{
                    expand : true,
                    cwd    : 'src/scss/',
                    src    : ['**/*.scss'],
                    dest   : 'dist/css/',
                    ext    : '.min.css'
                }]
            }
        },
        uglify : {
            dist : {
                options : {
                    banner : getBanner()
                },
                src  : 'src/js/sidebar.js',
                dest : 'dist/js/sidebar.min.js'
            }
        },
        watch : {
            sass : {
                files : ['src/scss/**/*.scss'],
                tasks : ['sass:dev']
            }
        }
    });

    // ----------------------------------------------------------------------------------------------- Plugins

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsdoc');

    // ------------------------------------------------------------------------------------------------- Tasks


    grunt.registerTask('build',   ['concat:dist', 'uglify:dist', 'sass:dist', 'sass:dev', 'jsdoc']);
    grunt.registerTask('default', ['sass:dev']);
    grunt.registerTask('doc',     ['jsdoc']);
};
