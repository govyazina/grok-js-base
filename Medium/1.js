/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    str.split('').forEach(smb => console.log(smb))

}

module.exports = logEachLetter