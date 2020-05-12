// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Başar\'s LEGO Room ',
  plugins: [{
    use: 'gridsome-plugin-tailwindcss',
  }],
  templates: {
    Photos: '/photos/:id',
    Categories: '/categories/:id'
  }
}
