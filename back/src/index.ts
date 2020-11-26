import Koa, { Context } from 'koa' 
import Mysql from 'mysql2/promise'
import Path from 'path'

const Router = require('koa-router')
const Cors = require('@koa/cors')
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
    const rows = await pool.query(`SELECT id, title, author, time FROM list ORDER BY time DESC`)
    ctx.body = rows[0]
})

router.get('/backend/read/:id', async (ctx: Context) => {
    const rows = await pool.query(`SELECT id, title, author, time, content FROM list WHERE id = ${ctx.params.id}`)
    ctx.body = rows[0]
})

router.post('/backend/write', async (ctx: Context) => {
    console.log(ctx.request.body)
    //const rows = await pool.query(`INSERT INTO list(title, author, time, content) VALUES ()`)
    ctx.body = {message: 'success'}
})


app.listen(3000, () => {
    console.log('server is listening to port 3000')
})