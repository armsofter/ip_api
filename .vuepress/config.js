module.exports = {
  lang: 'en-US',
  title: 'test task',
  base: process.env.DEPLOY_ENV === 'gh-pages' ? '/test_task/' : '/',
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      '/docs/development',
      '/docs/architecture',
      '/docs/naming-cheatsheet',
      // '/docs/routing',
      // '/docs/state',
      '/docs/linting',
      // '/docs/editors',
      // '/docs/production',
      // '/docs/troubleshooting',
    ],
  },
};
