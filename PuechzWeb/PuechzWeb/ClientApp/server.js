const express = require('express')
const app = express()
app.use(express.static('./dist/ng-gradient-able'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/ng-gradient-able/'}
  );
  });

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 8080}`)
})