module.exports = function(grunt) {

    /* This module avoid single plugin load for each one added */
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // This makes the package values accessible
        pkg: grunt.file.readJSON('package.json'),

        //Here we add configuration for our plugins

        // Minify our javaScript
        uglify: {

            options: {
              // Add a date to tag when the file was generated.
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },

            common: {

                files: {
                    'js/dest.js': ['js/source.js', 'js/source2.js'],
                    'js/dest.js': ['js/source.js']
                }
            }
        },

        // Compile our javaScript in one file
        concat: {

            compile: {

                files: {
                    'js/dest.js': ['js/source.js', 'js/source2.js'],
                    'js/dest.js': ['js/source.js']
                }
            }
        },

        /** Plugin: OPTIMIZE IMAGES -- Name : imagemin **/
        imagemin: {

            // Static images optimization
            /*static: {                          // Target
              options: {                       // Target options
                optimizationLevel: 10
              },
              files: {                         // Dictionary of files
                'img/top_espot_bg.jpg': 'img/top_espot_bg.jpg', // 'destination': 'source'
                'img/logo-footer.jpg': 'img/logo-footer.jpg',
                'img/product1-full.jpg': 'img/product1-full.jpg'
              }
            },*/

            // Dynamic images optimization
            dynamic: {                         // Another target
              options: {                       // Target options
                optimizationLevel: 10
              },
              // HTML images
              files: [
                  {
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,jpeg,gif}'],   // Actual patterns to match
                    dest: 'img/'                  // Destination path prefix
                  },
                  // css images
                  {
                    expand: true,
                    cwd: 'css/img',
                    src: ['**/*.{png,jpg,jpeg}'],
                    dest: 'css/img'
                  }
              ]
            }

        },

        /** Plugin: NOTOFITY ERRORS -- Name : notify hooks **/
        notify_hooks: {

          options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "Project Name" // defaults to the name in package.json, or will use project directory's name
          },

          watch: {
            options: {
              title: 'Task Complete',  // optional
              message: 'Concat and Uglify finished running', //required
            }
          }

        },

        /** Plugin: VALIDATE HTML FILES WITH W3C -- Name : validation **/
        validation: {
          options: {
            reset: grunt.option('reset') || false,
            stoponerror: false,
            reportpath: false,
            reset: true,
            /*remotePath: "http://decodize.com/",
            remoteFiles: ["html/moving-from-wordpress-to-octopress/","css/site-preloading-methods/"], //or
            remoteFiles: "validation-files.json", // JSON file contains array of page paths. */
            relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
          },

          files: {
            src: ['*.html']
          }
        },

        uncss: {
          options: {
            ignore: ['#added_at_runtime', /test\-[0-9]+/],
            media: ['(min-width: 768px)'],
            report: false,
            timeout: 1000
          },

          dist: {
            files: {
              'css/cssfile.css': ['HTML-file.html'] // Add each css file for corresponding html file here
              }
            }
        },

        pagespeed: {
          options: {
            nokey: true,
            url: "https://developers.google.com"
          },
          prod: {
            options: {
              url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
              locale: "en_GB",
              strategy: "desktop",
              threshold: 80
            }
          },
          paths: {
            options: {
              paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
              locale: "en_GB",
              strategy: "desktop",
              threshold: 80
            }
          }
        },

        /** Plugin: WATCH AND RUN CONFIGURE TASKS -- Name : watch **/
        watch: {

          /**  One Config per task to avoid unfound task bug **/
          // concat before compression.
          concat: {

            files: ['js/*.js'],
            tasks: ['concat'],

            options: {
              spawn: false,
            },

          },

          // compression
          uglify: {

            files: ['js/*.js'],
            tasks: ['uglify'],

            options: {
              spawn: false,
            },

          }

        }


    });


    // Default task launched when 'grunt' command is typed on terminal
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('server', [
    'watch',
    'server',
    'notify:server'
    ]);
};