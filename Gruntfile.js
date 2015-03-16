module.exports = function(grunt) {

    grunt.initConfig({
        //jshint: {
        //    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //    options: {
        //        globals: {
        //            jQuery: true
        //        }
        //    }
        //},
        uglify: {
            minify: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'js/dist/script.min.map',
                    mangle: {
                        except: ['jQuery']
                    }
                },
                files: {
                    'js/dist/script.min.js': [
                        'js/sagamore/src/jquery-migrate.min.js',
                        'js/sagamore/src/jquery.themepunch.tools.min.js',
                        'js/sagamore/src/jquery.themepunch.revolution.min.js',
                        'js/sagamore/src/rev_slider_init.js',
                        'js/sagamore/src/jquery.placeholder.js',
                        'js/sagamore/src/jquery.carouFredSel-6.2.1.js',
                        'js/sagamore/src/ab-tweet-scroller.js',
                        'js/sagamore/src/animo.js',
                        'js/sagamore/src/jquery.inview.js',
                        'js/sagamore/src/jquery.parallax-1.1.3.js',
                        'js/sagamore/src/jquery.tipsy.js',
                        'js/sagamore/src/jquery.knob-custom.js',
                        'js/sagamore/src/jquery.ui.core.min.js',
                        'js/sagamore/src/jquery.ui.widget.min.js',
                        'js/sagamore/src/jquery.ui.accordion.min.js',
                        'js/sagamore/src/jquery.ui.tabs.min.js',
                        'js/sagamore/src/jquery.ui.effect.min.js',
                        'js/sagamore/src/jquery.ui.effect-slide.min.js',
                        'js/sagamore/src/jquery.isotope.min.js',
                        'js/sagamore/src/superfish.js',
                        'js/sagamore/src/masonry.min.js',
                        'js/sagamore/src/imagesloaded.pkgd.min.js',
                        'js/sagamore/src/jpreloader.js',
                        'js/sagamore/src/waypoints.js',
                        'js/sagamore/src/init.js',
                        'js/sagamore/src/custom.js',
                    ]
                }
            }
        },
        cssmin: {
            minify: {
                src: [
                    'css/src/sagamore/animo-animate.css',
                    'css/src/sagamore/settings.css',
                    'css/src/sagamore/revolution_captions.css',
                    'css/src/sagamore/entypo_icons/style.css',
                    'css/src/sagamore/style.css',
                    'css/src/sagamore/responsive.css'
                ],
                dest: 'css/dist/style.min.css'
            }
        },
        watch: {
            files: ['<%= cssmin.minify.src %>', '<%= uglify.minify.files %>'],
            tasks: ['jshint']
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify']);

};