module.exports = function(grunt) {
	// Project configuration.
  grunt.option.init({
      'ver':(!grunt.option('ver')) ? grunt.file.readJSON('package.json').version : grunt.option('ver'),
      'rel':(!grunt.option('rel')) ? grunt.file.readJSON('package.json').release : grunt.option('rel')
  });
	var initConfig = {
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			theme: '../',
			dist: 'dist/'
		},
    babel: {
  		options: {
  			sourceMap: true,
  			presets: ['babel-preset-es2015']
  		},
  		dist: {
  			files: {
  				'<%= dirs.theme %><%= dirs.dist %>JSONarea.js': 'js/JSONarea.js'
  			}
  		}
  	},
    uglify: {
      main: {
        options: {
          sourceMap: true,
        },
        files: {
          '<%= dirs.theme %><%= dirs.dist %>JSONarea.min.js': ['<%= dirs.theme %><%= dirs.dist %>JSONarea.js']
        }
      }
    }
  };

  require('load-grunt-tasks')(grunt);

	grunt.initConfig(initConfig);

	//grunt.registerTask('default', ['growl:watch', 'watch']);
	grunt.registerTask('build', ['babel','uglify']);
};
