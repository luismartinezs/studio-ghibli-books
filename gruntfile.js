module.exports = function(grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          "src/components/view/styles.css":
            "src/components/view/styles-precompile.css"
        }
      }
    },
    watch: {
      styles: {
        files: ["src/components/view/styles-precompile.css"],
        tasks: ["autoprefixer"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
