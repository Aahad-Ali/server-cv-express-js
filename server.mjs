import express from 'express';


// console.log('Aahad')


const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  console.log('request :', req.ip)

  res.send('<h1>Aahad Ali</h1>' + '<img src="https://avatars.githubusercontent.com/u/104500845?v=4" with=150px height=150px border-radius:"50%"/>' + '<h1>Summary:</h1>' + '<p>Use the links on this page to download the latest version of FlatbedScanner 22 drivers. All drivers available for download have been scanned by antivirus program.'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download aahad ali abc button'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download button</p>'+ '<h1>Skills:</h1>' + '<p>Use the links on this page to download the latest version of FlatbedScanner 22 drivers. All drivers available for download have been scanned by antivirus program.'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download aahad ali abc button'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download button</p>'+ '<h1>Experience:</h1>' + '<p>Use the links on this page to download the latest version of FlatbedScanner 22 drivers. All drivers available for download have been scanned by antivirus program.'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download aahad ali abc button'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download button</p>' + '<h1>Refrence:</h1>' + '<p>Use the links on this page to download the latest version of FlatbedScanner 22 drivers. All drivers available for download have been scanned by antivirus program.'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download aahad ali abc button'+ '<br />'+' Please choose the relevant version according to your computers operating system and click the download button</p>'+ '<br />')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})