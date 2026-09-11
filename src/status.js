'use strict';
function isHealthyStatus(status) {
  return status >= 200 && status < 300;
}
module.exports = { isHealthyStatus };
