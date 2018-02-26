const mysql = require('think-model-mysql');
exports.model = {
    type: 'mysql', // 默认使用的类型，调用时可以指定参数切换
    common: { // 通用配置
        logConnect: true, // 是否打印数据库连接信息
        logSql: true, // 是否打印 SQL 语句
        logger: msg => think.logger.info(msg) // 打印信息的 logger
    },
    mysql: { // mysql 配置
        handle: mysql,
        user: 'root', // 用户名
        password: 'root123', // 密码
        database: 'think_demo', // 数据库
        host: '127.0.0.1', // host
        port: 3306, // 端口
        connectionLimit: 5, // 连接池的连接个数，默认为 1
        prefix: '' // 数据表前缀，如果一个数据库里有多个项目，那项目之间的数据表可以通过前缀来区分
    }
};
//# sourceMappingURL=config.development.js.map