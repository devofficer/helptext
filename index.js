const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path')

const app = express()
const port = 5000

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(cors());
app.use(bodyparser.json())

app.post('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    var dataToSend;
    var reqData = req.body;

    const python = spawn('python', ['python_engine.py', reqData.mode, reqData.strength, reqData.max_len, reqData.content]);
    // const python = spawn('python', ['python_engine.py', 0, 0, 0, reqData.content]);

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        dataToSend = dataToSend.substring(19, dataToSend.length-5);
        console.log(dataToSend)
        // JSON.parse(dataToSend).forEach(sentence => {
        //     res.send(sentence.summary_text)
        // });
        res.send(dataToSend)
    });

})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './client/build/index.html'))
})
