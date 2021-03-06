var debug     = require('debug')('skytap-networks')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');


/** 
 * Networks API helper:
 * http://help.skytap.com/#API_Documentation.html#Network
 *
 * @param {Skytap} reference to parent object
 */
function Networks(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Networks;



/**
 * Gets the list of networks for a template or configuration.
 * You must supply a template or configuration as networks 
 * are not top level objects in the API.
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
Networks.prototype.list = function list(params, next) {
  debug('list %j', params);

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks';
  } else if(params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks';
  }
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Gets the a networks in a template or configuration.
 * You must supply a template or configuration as networks 
 * are not top level objects in the API.
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @config {Number} network_id
 * @callback {Function} next
 * @return {Promise}
 */
Networks.prototype.get = function get(params, next) {
  debug('get %j', params);
  
  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks/:network_id';
  } else if(params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks/:network_id';
  }
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Updates the network in a template or configuration
 * with the supplied network fields.
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @config {Number} network_id
 * @callback {Function} next
 * @return {Promise}
 */
Networks.prototype.update = function update(params, next) {
  debug('update %j', params);
  
  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/networks/:network_id';
  } else if(params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/networks/:network_id';
  }
  args.params = params;
  return rest.apiPut(args, next);
};