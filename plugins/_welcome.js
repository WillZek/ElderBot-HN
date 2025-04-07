import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  console.log('Evento de grupo recibido:', m.messageStubType, m.isGroup);
  
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0];
  let chat = global.db.data.chats[m.chat];
  console.log('Configuración del chat:', chat);

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = global.welcome
      .replace('+tag', `@${m.messageStubParameters[0].split`@`[0]}`)
      .replace('+description', groupMetadata.desc || 'Sin descripción');

    console.log('Mensaje de bienvenida:', welcome);

    try {
      await conn.sendMessage(m.chat, { text: welcome, mentions: [who] }, { quoted: m });
    } catch (error) {
      console.error('Error al enviar mensaje de bienvenida:', error);
    }
  }
}