const path = require('path')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir))

app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`)
})
