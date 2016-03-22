var commands = [
  {
    id: 'updateSAWeb',
    desc: 'Update Simple Accounting Frontend Website',
    test: 'refs/heads/dev',
    timeout: 1000 * 60 * 10,
    command: 'cd /home/rankun203/git/simple-accounting-web && . ./bin/updateWebsite.sh'
  },
  {
    id: 'helloworld',
    desc: 'Print Hello world',
    command: 'echo "Hello World"',
    test: ''
  }
];

module.exports = commands;
