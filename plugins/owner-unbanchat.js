let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🎌 *¡Este chat no está registrado!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '[🌠] *El bot no está baneado en este chat*', m)
chat.isBanned = false
await conn.reply(m.chat, `➩ *ᴇʟ ʙᴏᴛ ʜᴀ sɪᴅᴏ ᴀᴄᴛɪᴠᴀᴅᴏ ᴇɴ ᴇsᴛᴇ ᴄʜᴀᴛ🚩*`, m)
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.owner = true 
handler.botAdmin = false
handler.group = false

export default handler
