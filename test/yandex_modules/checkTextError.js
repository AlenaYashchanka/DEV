var assert = require('assert');

function checkTextError (error_text, error_template) {
    assert.equal(error_text, error_template);
}

module.exports = checkTextError;
