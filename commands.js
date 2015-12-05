var commands = [
  {
    id: 'updateSAWeb',
    desc: 'Update Simple Accounting Frontend Website',
    test: 'refs/heads/dev',
    timeout: 1000 * 60 * 10,
    command: 'cd /alidata/docker/git/simple-accounting-web && . ./bin/updateWebsite.sh'
  },
  {
    id: 'helloWorld',
    desc: 'Print Hello world',
    command: 'echo "Hello World"'
  }
];

module.exports = commands;
