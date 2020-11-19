import Koa, { Context } from 'koa' 
import Mysql from 'mysql2/promise'

const Router = require('koa-router')
const Cors = require('@koa/cors')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(router.routes())

const pool = Mysql.createPool({
    host: '13.209.54.66',
    user: 'root',
    password: 'wopsdf',
    connectionLimit: 4,
    database: 'blindboard'
})

router.get('/', async (ctx: Context) => {
    const rows = await pool.query('SELECT id, title, author, time FROM list ORDER BY time DESC')
    ctx.body = rows[0]
})

router.get('/write', (ctx: Context) => {
    ctx.body = '소개'
})

router.get('/read/:id', (ctx: Context) => {
    const { id } = ctx.params 
    ctx.body = id + '의 소개'
})

router.get('/post', (ctx: Context) => {
    const { id } = ctx.request.query
    if(id) {
        ctx.body = '포스트 #' + id
    } else {
        ctx.body = '포스트 아이디가 없습니다.'
    }
})

app.listen(3000, () => {
    console.log('server is listening to port 3000')
})