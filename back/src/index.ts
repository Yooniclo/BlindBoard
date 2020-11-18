import Koa, { Context } from 'koa' 
const Router = require('koa-router')
const Cors = require('@koa/cors')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(router.routes())

router.get('/', (ctx: Context) => {
    ctx.body = { status: 'OK2' }
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
    console.log('heurm server is listening to port 3000')
})