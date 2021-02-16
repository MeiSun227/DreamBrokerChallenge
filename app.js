const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/api/analyze', (request, response) => {
    let responseBody
    if (JSON.stringify(request.body) === JSON.stringify({})) {
        responseBody = {
            'textLength': {
                'withSpaces': 0,
                'withoutSpaces': 0
            },
            'wordCount': 0,
            'characterCount': []
        }
    } else {
        const textLength = request.body['text'].length
        const textRemoveSpace = request.body['text'].replace(/\s+/g, '')
        const textLengthNoSpace = textRemoveSpace.length
        const wordCount = request.body['text'].match(/\S+/g).length
        const letterRemoveNumber = textRemoveSpace.replace(/[0-9]/g, '')
        const letterRemoveSpecialChar = letterRemoveNumber.replace(/[^\w\s]/gi,'')
        const letters = letterRemoveSpecialChar.split('').sort()
        const letterCount = letters.reduce((acc, value) => ({
            ...acc,
            [value]: (acc[value] || 0) + 1
        }), {})
        const arryObj = Object.entries(letterCount).map((e) => ({ [e[0]]: e[1] }))
    
    
        responseBody = ({
            textLength: { 'withSpaces': textLength, 'withoutSpaces': textLengthNoSpace },
            wordCount: wordCount,
            letterCount: arryObj
        })
    }

    response.json(responseBody)
})

module.exports = app
