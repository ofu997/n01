const path = require('path');

// module.exports = path.dirname(process.filename);
module.exports = path.dirname(require.main.filename);