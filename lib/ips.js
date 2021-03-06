var debug     = require('debug')('skytap-ips')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest')
  , vargs     = require('vargs-callback');



/** 
 * Public IP Address API helper:
 * http://help.skytap.com/#API_Documentation.html#Public
 *
 * @param {Skytap} reference to parent object
 */
function Ips(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Ips;



/**
 * Lists the public IPs
 *
 * @callback {Function} next
 * @return {Promise}
 */
Ips.prototype.list = vargs(function list(params, next) {
  debug('publicips %j', args);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/ips';
  args.params = params;
  return rest.apiGet(args, next);
});


// TODO
Ips.prototype.acquire = function acquire(args, next) {
  
};


// TODO
Ips.prototype.release = function release(args, next) {
  
};


/**
 * Attaches a public IP address to an interface on a vm
 * 
 * @param {Object} params
 * @config {String} params.vm_id - required
 * @config {String} params.interface_id - required
 * @config {String} params.ip - required
 * @callback {Function} next
 * @return {Promise}
 */
Ips.prototype.attach = function attach(params, next) {
  debug('attach');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/vms/:vm_id/interfaces/:interface_id/ips';
  args.params = params;
  return rest.apiPost(args, next);
};


/**
 * Attaches a public IP address to an interface on a vm
 *
 * @param {Object} params
 * @config {String} params.vm_id - require
 * @config {String} params.interface_id - required
 * @config {String} params.ip - required
 * @callback {Function} next
 * @return {Promise}
 */
Ips.prototype.detach = function detach(params, next) {
  debug('detach');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/vms/:vm_id/interfaces/:interface_id/ips/:ip/detach';
  args.params = params;
  return rest.apiPost(args, next);
};


// TODO
Ips.prototype.attached = function attached(args, next) {

};