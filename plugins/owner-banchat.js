let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `➩ *ᴇʟ ʙᴏᴛ ʜᴀ sɪᴅᴏ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ ᴇɴ ᴇsᴛᴇ ᴄʜᴀᴛ🚩*`, m)

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true 

export default handler