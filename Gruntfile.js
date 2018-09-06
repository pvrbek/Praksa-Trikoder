module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		settings: {
			    distPath: 'public/'
		},
		sass_import: {
    			options: {
      				basePath: 'scss/'
    			},
    			files: {
      			'scss/main.scss': [{first: '_variables.scss'}]
    			},
  		},
		sass: {
			dist: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['**/*.scss'],
				tasks: ['sass_import','sass']
			},
			html: {
				expand: true,
				files: ['*.html'],
				tasks: ['includereplace'],
				options: {
				    spawn: false
				}
		    	}
		},
		includereplace: {
		    dist: {
		        options: {
		            prefix: '{{ ',
		            suffix: ' }}'
		        },
		        files: [{
		                src: 'index.html',
		                dest: '<%= settings.distPath %>index.html'
		            }, {
		                src: 'login.html',
		                dest: '<%= settings.distPath %>login.html'
		            }
		        ]
		    }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-sass-import');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.registerTask('default',['watch','webpack']);
}
