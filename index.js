import express from 'express';
import permutation from 'permutation';
import * as wordList from 'an-array-of-english-words' assert {type: 'json'};

const port = process.env.PORT || 4000;
const server = express();

server.get('/:word',
    (req, res) => {
        let jWord = req.params.word;

        //storing letter combinations in an array
        let arrayJWord = permutation(jWord, { unique: true });

        //storing dictionary words in array
        let arrayWordList = wordList.default;

        let foundStatus = false;
        let currentWords = [];

        for (let i of arrayJWord) {
            if (arrayWordList.includes(i) == true) {
                //foundStatus = true; i caught this bug later, so it's not in the video
                console.log(i);
                currentWords.push(i);
            }
        }

        res.send(`Matching Word/s: ${currentWords.length} and words are ${currentWords}`);
        res.end();
    })



server.get('/',
    (req, res) => {
        console.log(req);
        res.send('response sent from server');
        res.end();
    })

server.listen(port,
    () => {
        console.log(`server listening on port ${port}`)
    });
