import mysql from 'mysql2' // mysql2模块才支持promise()
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_db01',
    user: 'root',
    password: 'admin123'
})



//默认导出一个支持Promise API 的 pool
export default pool.promise() //这样外界可以以异步的方式操作数据库