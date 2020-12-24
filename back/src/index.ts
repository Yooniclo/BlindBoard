import Koa, { Context } from 'koa' 
import Mysql from 'mysql2/promise'
import Path from 'path'
import { generateToken, decodeToken } from './lib/token'

const Router = require('koa-router')
const Cors = require('koa2-cors')
const Serve = require('koa-static')
const Sendfile = require('koa-sendfile')
const Bodyparser = require('koa-bodyparser')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(Bodyparser())
app.use(router.routes())
app.use(Serve(Path.join(__dirname, '../public')))

const pool = Mysql.createPool({
    host: '15.165.250.78',
    user: 'root',
    password: 'wopsdf',
    connectionLimit: 4,
    database: 'blind_board'
})

app.use(async ctx => {
    await Sendfile(ctx, Path.join(__dirname, '../public/blindboard/index.html'))
})

router.get('/init', async (ctx: Context) => {
    const rows = await pool.query(`SELECT id, title, author, time FROM list ORDER BY time DESC`)
    ctx.body = rows[0]
})

router.get('/auth', async (ctx: Context) => {
    // const token = ctx.cookies.get('access_token')
    // if(!token) ctx.body = {message: 'Not Auth'}
})

router.get('/backend/read/:id', async (ctx: Context) => {
    const rows = await pool.query(`SELECT id, title, author, time, content FROM list WHERE id = ${ctx.params.id}`)
    ctx.body = rows[0]
})

router.get('/backend/reply/count/:id', async (ctx: Context) => {
    const rows = await pool.query(`SELECT count(id) AS count FROM reply WHERE list_id = ${ctx.params.id}`)
    ctx.body = rows
})

router.get('/backend/reply/read/:id', async (ctx: Context) => {
    const rows = await pool.query(`SELECT * FROM reply WHERE list_id = ${ctx.params.id}`)
    ctx.body = rows[0]
})

router.post('/backend/reply/write', async (ctx: Context) => {
    const result: any = await pool.query(`INSERT INTO reply(list_id, author, time, content) VALUES 
    (${ctx.request.body.list_id}, '${ctx.request.body.author}', NOW(), '${ctx.request.body.content}')`)

    if(result[0].affectedRows === 1) {
        ctx.body = {message: 'Success'}
    }
})

router.post('/backend/write', async (ctx: Context) => {
    const result: any = await pool.query(`INSERT INTO list(title, author, time, content) VALUES 
    ('${ctx.request.body.title}', '${ctx.request.body.author}', NOW(), '${ctx.request.body.content}')`)

    if(result[0].affectedRows === 1) {
        // const data = {
        //     title: ctx.request.body.title,
        //     content: ctx.request.body.content
        // }
        // const token = generateToken(data)
        // ctx.cookies.set('access_token', token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 24 * 7 })
        ctx.body = {message: 'Success'}
    }
})

app.listen(3000, () => {
    console.log('server is listening to port 3000')
})