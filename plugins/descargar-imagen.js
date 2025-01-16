
import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ${mssg.example}: ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*❖  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest', 'imagen']
handler.tags = ['buscador']
handler.command = ['pinterest', 'imagen'] 
handler.estrellas = 5;

export default handler