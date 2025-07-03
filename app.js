const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

// Export the app for testing
module.exports = app;

// Start the server only if this file is run directly
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
