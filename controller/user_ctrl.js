import db from '../db/index.js'

//获取所有用户的列表数据
export async function getAllUsers(req, res) {
    
    //try里面发生的错误将被catch所捕获，这样程序才不会直接崩溃
    try{
        // db.query()函数的返回值是Promise的实例对象，因此，可以使用 async/await进行简化
        const [rows] = await db.query('select id, username, nickname from my_users')
        res.send({
            status: 0,
            message: '获取用户列表数据成功',
            data: rows
        })
    }catch(err){
        res.send({
            status: 1,
            message: '获取用户列表失败',
            desc: err.message
        })
    }
}
