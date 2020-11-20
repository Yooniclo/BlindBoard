import Koa, { Context } from 'koa' 
import Mysql from 'mysql2/promise'
import Path from 'path'

const Router = require('koa-router')
const Cors = require('@koa/cors')
const Serve = require('koa-static')
const Mount = require("koa-mount")

const app = new Koa() 
const router = new Router()
const static_page = new Koa()

app.use(Cors())
app.use(router.routes())
app.use(Serve(Path.join(__dirname, '../public'), {index: '/'}))
app.use(Mount("/", static_page))

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
    console.log(__dirname)
})

router.get('/write', (ctx: Context) => {
    ctx.body = '소개'
})

router.get('/read/:id', (ctx: Context) => {
    const { id } = ctx.params 
    ctx.body = id + '의 소개'
    console.log(ctx.params)
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