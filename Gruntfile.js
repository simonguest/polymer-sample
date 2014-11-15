module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    nodemon: {
      dev: {
        script: './server.js'
      }
    },
    concurrent: {
      tasks: ['nodemon'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.registerTask('default', ['concurrent']);
};