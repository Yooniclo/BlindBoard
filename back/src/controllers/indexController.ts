import { Context } from "vm";

const list = (ctx: Context) => {
    ctx.body = 'hi'
    console.log('hi')
}