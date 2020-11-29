const JWT = require('jsonwebtoken')

const JWT_SECRET = 'BLINDBOARD_WEB_TOKEN_KEY_!@#$'

const generateToken = (payload: any) => {
    const token = JWT.sign(payload, JWT_SECRET, { expiresIn: '7d'})
    return token
}
export default generateToken