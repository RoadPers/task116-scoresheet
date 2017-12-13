'use strict';

let	readlineSync = require('cli-interact');

function main() {
    while (true) {

        console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)
        let input = readlineSync.question('选择：')
        if (input == 1) {
            console.log("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n")
        }else if (input == 2){
            console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n')
        }else if (input == 3){
            break;
        }
    }
}

main();

module.exports = main;
