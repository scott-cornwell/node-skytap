var debug     = require('debug')('skytap-projects')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest')
  , vargs     = require('vargs-callback');


/** 
 * Projects API helper:
 * http://help.skytap.com/#API_Documentation.html#Project
 *
 * @param {Skytap} reference to parent object
 */
function Projects(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Projects;



/**
 * Gets the list of projects
 * 
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.list = vargs(function list(params, next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects';
  args.params = params;
  return rest.apiGet(args, next);
});


/**
 * Gets a project and its information
 *  
 * @param {Object} params
 * @config {Number} project_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.get = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id';
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Gets the templates belonging to a project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.templates = function templates(params, next) {
  debug('templates %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/templates';
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Gets the environments belonging to a project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.environments = function environments(params, next) {
  debug('environments %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/configurations';
  args.params = params;
  return rest.apiGet(args, next);
};


/**
 * Adds an environment to the project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.addEnvironment = function addEnvironment(params, next) {
  debug('add environment: %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/configurations/:configuration_id';
  args.params = params;
  return rest.apiPost(args, next);
};


/**
 * Removes an environment from the project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @config {Number} configuration_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.removeEnvironment = function removeEnvironment(params, next) {
  debug('remove environment: %j', args);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/configurations/:configuration_id';
  args.params = params;
  return rest.apiDel(args, next);
};


/**
 * Adds a template to the project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @config {Number} template_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.addTemplate = function addTemplate(params, next) {
  debug('add template: %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/templates/:template_id';
  args.params = params;
  return rest.apiPost(args, next);
};


/**
 * Removes a template from the project
 * 
 * @param {Object} params
 * @config {Number} project_id
 * @config {Number} template_id
 * @callback {Function} next
 * @return {Promise}
 */
Projects.prototype.removeTemplate = function removeTemplate(params, next) {
  debug('remove template: %j', args);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/projects/:project_id/templates/:template_id';
  args.params = params;
  return rest.apiDel(args, next);
};