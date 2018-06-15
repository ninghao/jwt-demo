const jwt = require('jsonwebtoken')

// Token 数据
const payload = {
  name: 'wanghao',
  admin: true
}

// 密钥
const secret = 'ILOVENINGHAO'

// 签发 Token
const token = jwt.sign(payload, secret, { expiresIn: '1day' })

// 输出签发的 Token
console.log(token)
