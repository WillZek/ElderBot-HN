import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  console.log('Evento de grupo recibido:', m.messageStubType, m.isGroup);
  
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0];
  let chat = global.db.data.chats[m.chat];
  console.log('Configuración del chat:', chat);

  // Verifica si el mensaje de bienvenida está habilitado y si el tipo de mensaje es de agregar participante
  if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let welcome = global.welcome
      .replace('+tag', `@${who.split`@`[0]}`)
      .replace('+description', groupMetadata.desc || 'Sin descripción');

    console.log('Mensaje de bienvenida:', welcome);

    try {
      await conn.sendMessage(m.chat, { text: welcome, mentions: [who] }, { quoted: m });
    } catch (error) {
      console.error('Error al enviar mensaje de bienvenida:', error);
    }
  }
}