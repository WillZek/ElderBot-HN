import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/i7uo2l.jpg';

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

let desc = `${groupMetadata.desc?.toString() || '*ElderBot-HN*'}`

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || 'Bienvenido/a :';

let chat = global.db.data.chats[m.chat];

// if (!chat.isBanned) return m.reply('🍭 El Bot Está Baneado En Este Chat');

    if (!chat.isBanned && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let bienvenida = `│┊➺ *𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 (𝙖)*\n│┊➺ *@${m.messageStubParameters[0].split`@`[0]}*\n│┊➺ *${groupMetadata.subject}*\n\n*⊰ 𝙇𝙚𝙚 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 👇*\n\n${desc}\n\n> © ⍴᥆ᥕᥱrᥱძ ᑲᥡ һᥒ ᥱᥣძᥱr`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: estilo })
    } else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {

const despMessage = global.db.data.chats[m.chat]?.despMessage || 'Se Fue😹';

     let bye = `\n*│┊➺* *𝙎𝙚 𝙛𝙪𝙚́ 𝙅𝙖𝙢𝙖́𝙨 𝙩𝙚́ 𝙦𝙪𝙞𝙨𝙞𝙢𝙤𝙨 𝙖𝙦𝙪𝙞́*\n\n*│┊➺* @${m.messageStubParameters[0].split`@`[0]}\n\n*│┊➺* *𝙐𝙣𝙖 𝙢𝙧𝙙 𝙢𝙚𝙣𝙤𝙨 😈*\n┗━━━━━━━━━━━━━━━━┛`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: estilo })
    }
  }

  return true
}