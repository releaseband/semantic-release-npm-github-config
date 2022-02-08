module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      'semantic-release-github-pullrequest',
      {
        assets: ['CHANGELOG.md'],
        baseRef: 'main',
      },
    ],
  ],
};
