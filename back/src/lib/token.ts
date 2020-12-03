const JWT = require('jsonwebtoken')

const JWT_SECRET = 'BLINDBOARD_WEB_TOKEN_KEY_!@#$'

export const generateToken = (payload: any) => {
    const token = JWT.sign(payload, JWT_SECRET, { expiresIn: '7d'})
    return token
}

export const decodeToken = (token: string | undefined) => {
    const decode_token = JWT.verify(token, JWT_SECRET)
    return decode_token
}
