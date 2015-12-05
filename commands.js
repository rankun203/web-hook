var commands = [
  {
    id: 'updateSAWeb',
    desc: 'Update Simple Accounting Frontend Website',
    test: 'refs/heads/dev',
    command: 'cd /home/rankun203/git/mine/outsourcing/simple-accounting/simple-accounting-web && git pull origin dev && git checkout dev'
  },
  {
    id: 'helloWorld',
    desc: 'Print Hello world',
    command: 'echo "Hello World"'
  }
];

module.exports = commands;
