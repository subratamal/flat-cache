var fs = require( 'graceful-fs' );
var write = require( 'write' );
var circularJson = require( 'circular-json' )

module.exports = {

  /**
   * Read json file synchronously using circular-json
   *
   * @method readJSON
   * @param  {String} filePath Json filepath
   * @returns {*} parse result
   */
  readJSON: function ( filePath ) {
    return circularJson.parse( fs.readFileSync( filePath ).toString().replace(/^\ufeff/g, '') );
  },

  /**
   * Write json file synchronously using circular-json
   *
   * @method writeJSON
   * @param  {String} filePath Json filepath
   * @param  {*} data Object to serialize
   */
  writeJSON: function (filePath, data ) {
    write.sync( filePath, circularJson.stringify( data ) );
  }

};
