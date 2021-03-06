var debug     = require('debug')('skytap-vms')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest');


/** 
 * VMs API helper:
 * http://help.skytap.com/#API_Documentation.html#VM
 *
 * @param {Skytap} reference to parent object
 */
function VMs(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = VMs;



/**
 * Gets a VM for the template or configuration
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @config {Number} vm_id
 * @callback {Function} next
 * @return {Promise}
 */
VMs.prototype.get = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id';
  } else if (params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id';
  }
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Updates a VM in the template or configuration
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @config {Number} vm_id
 * @callback {Function} next
 * @return {Promise}
 */
VMs.prototype.update = function update(params, next) {
  debug('update %j', params);

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id';
  } else if (params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id';
  }
  args.params = params;
  return rest.apiPut(args, next); 
};


/**
 * Deletes a VM in the template or configuration
 * 
 * @param {Object} params
 * @config {Number} template_id
 * @config {Number} configuration_id
 * @config {Number} vm_id
 * @callback {Function} next
 * @return {Promise}
 */
VMs.prototype.del = function del(params, next) {
  debug('del %j', params);

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id';
  } else if (params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id';
  }
  args.params = params;
  return rest.apiDel(args, next); 
};


/**
 * Gets the user data for an environment
 *  
 * @params {Object} params
 * @config {Number} configuration_id
 * @config {Number} template_id
 * @config {Number} vm_id 
 * @callback {Function} next
 * @return {Promise}
 */
VMs.prototype.userdata = function userdata(params, next) {
  debug('getUserData');  

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id/user_data';
  } else if (params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id/user_data';
  }
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Gets the user data for an environment
 *  
 * @params {Object} params
 * @config {Number} configuration_id
 * @config {Number} template_id
 * @config {Number} vm_id 
 * @config {String} contents
 * @callback {Function} next
 * @return {Promise}
 */
VMs.prototype.updateUserdata = function updateUserdata(params, next) {
  debug('updateUserData');

  var args = this.getArgs();
  if(params.template_id) {
    args.url = 'https://cloud.skytap.com/templates/:template_id/vms/:vm_id/user_data';
  } else if (params.configuration_id) {
    args.url = 'https://cloud.skytap.com/configurations/:configuration_id/vms/:vm_id/user_data';
  }
  args.params = params;
  return rest.apiPut(args, next);
};