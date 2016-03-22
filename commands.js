var commands = [
  {
    id: 'updateSAWeb',
    desc: 'Update Simple Accounting Frontend Website',
    test: 'refs/heads/dev',
    timeout: 1000 * 60 * 10,
    command: 'cd /home/rankun203/git/mine/outsourcing/simple-accounting/simple-accounting-web && . ./bin/updateWebsite.sh'
  },
  {
    id: 'helloworld',
    desc: 'Print Hello world',
    test: '',
    command: 'echo Hello World!'
  }
];

module.exports = commands;
