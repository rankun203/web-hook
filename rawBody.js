/**
 * Created on 12/5/15.
 * @author rankun203
 */

function rawBody(req, res, next) {
  req.rawBody = '';

  req.on('data', function(chunk) { 
    req.rawBody += chunk;
  });

  req.on('end', function() {
    next();
  });
}


module.exports = rawBody;
