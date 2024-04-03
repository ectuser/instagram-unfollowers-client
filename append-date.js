const fs = require('fs');

fs.readFile(__dirname + "/dist/index.html", 'utf8', function (error, html) {
  if (error) {
    throw error;
  }

  const date = new Date().toISOString()
  html = html.replace("{time}", date);
  
  fs.writeFile(__dirname + "/dist/index.html", html, () => {});
});