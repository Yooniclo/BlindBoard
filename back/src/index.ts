import Koa, { Context } from 'koa' 
import Mysql from 'mysql2/promise'
import Path from 'path'

const Router = require('koa-router')
const Cors = require('@koa/cors')
const Serve = require('koa-static')
const Sendfile = require('koa-sendfile')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(router.routes())
app.use(Serve(Path.join(__dirname, '../public')))

const pool = Mysql.createPool({
    host: '13.209.54.66',
    user: 'root',
    password: 'wopsdf',
    connectionLimit: 4,
    database: 'blindboard'
})


router.get('/', async (ctx: Context) => {
    await Sendfile(ctx, Path.join(__dirname, '../public/index.html'))
})

router.get('/init', async (ctx: Context) => {
    const rows = await pool.query('SELECT id, title, author, time FROM list ORDER BY time DESC')
    ctx.body = rows[0]
})

router.get('/write', (ctx: Context) => {
    ctx.body = '소개'
})

router.get('/read/:id', (ctx: Context) => {
    const { id } = ctx.params 
    ctx.body = id + '의 소개'
    console.log(ctx.params)
})

app.listen(3000, () => {
    console.log('server is listening to port 3000')
})