/**
 * Created on 12/5/15.
 * @author rankun203
 */

var commands = [
  {
    id: 'updateSAAPI',
    desc: 'Update Simple Accounting API',
    timeout: 1000 * 60 * 5,
    command: 'cd /home/rankun203/git/mine/outsourcing/simple-accounting/simple-accounting-apidoc && git pull'
  }
];

module.exports = commands;
