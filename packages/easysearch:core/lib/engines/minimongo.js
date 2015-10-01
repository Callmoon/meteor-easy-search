/**
 * The MinimongEngine lets you search the index on the client-side.
 *
 * @type {MinimongoEngine}
 */
MinimongoEngine = class MinimongoEngine extends Engine {
  /**
   * Return default configuration.
   *
   * @returns {Object}
   */
  defaultConfiguration() {
    return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), super.defaultConfiguration());
  }

  /**
   * Search the index.
   *
   * @param {Object} searchDefinition Search definition
   * @param {Object} options          Object of options
   *
   * @returns {cursor}
   */
  search(searchDefinition, options) {
    if (!Meteor.isClient) {
      throw new Meteor.Error('only-client', 'Minimongo can only be used on the client');
    }

    // check() calls are in getSearchCursor method
    return MongoDBEngine.prototype.getSearchCursor.apply(this, arguments);
  }
};

MinimongoEngine.prototype.checkSearchParam = MongoDBEngine.prototype.checkSearchParam;
MinimongoEngine.prototype.transformSearchDefinition = MongoDBEngine.prototype.transformSearchDefinition;
