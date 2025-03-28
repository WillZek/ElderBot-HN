
let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `✦ *𝙀𝙡𝙙𝙚𝙧-𝙗𝙤𝙩* 𝘼𝙗𝙖𝙣𝙙𝙤𝙣𝙖 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙛𝙪𝙚 𝙂𝙚𝙣𝙞𝙖𝙡 𝙚𝙨𝙩𝙖𝙧 𝙖𝙦𝙪𝙞́👋`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.prems = true
export default handler
