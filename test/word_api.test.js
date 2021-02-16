const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const testText = { 'text': 'hello 2 times  ' }

test('response wordCount is correct', async () => {
  const response = await api
    .post('/api/analyze')
    .send(testText)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.wordCount).toBe(3)
})

test('response letterCount is correct', async () => {
  const response = await api
    .post('/api/analyze')
    .send(testText)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  const expectedResult = [{ 'e': 2 }, { 'h': 1 }, { 'i': 1 }, { 'l': 2 }, { 'm': 1 }, { 'o': 1 }, { 's': 1 }, { 't': 1 }]
  expect(response.body.characterCount).toStrictEqual(expectedResult)
})

test('response textLength is correct', async () => {
  const response = await api
    .post('/api/analyze')
    .send(testText)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.textLength).toStrictEqual({ 'withSpaces': 15, 'withoutSpaces': 11 })
})