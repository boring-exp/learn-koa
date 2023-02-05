const { createToken, verifyToken } = require('./jwt')

// const token = createToken({name: 'pjw'})
// console.log(token)

const decode = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGp3IiwiZXhwIjoxNjc1NTg2MzMzLCJpYXQiOjE2NzU1ODYzMzJ9.ReCac4XXVon1EN0WCmQMCsMY7UfthW0RGXnqqHsWRZc')

if (!decode) {
    console.log(decode)
}
console.log(decode)