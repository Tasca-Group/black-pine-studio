/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://blackpine-studio.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
}
