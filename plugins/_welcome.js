import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  // Define la URL de la imagen por defecto
  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  
  // Obtén la URL de la imagen de perfil
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => defaultImage);
  
  // Descarga la imagen de perfil
  let image = await (await fetch(pp)).buffer();

  let chat = global.db.data.chats[m.chat];

  // Verifica si el mensaje de bienvenida está habilitado y si el tipo de mensaje es de agregar participante
  if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`;
    let description = groupMetadata.desc ? `\n${groupMetadata.desc}` : '';
    let welcome = `*Usuario ✦ ${user}*\n${description}`;

    try {
      await conn.sendMessage(m.chat, { text: welcome, mentions: [m.messageStubParameters[0]] }, { quoted: m });
    } catch (error) {
      console.error('Error al enviar mensaje de bienvenida:', error);
    }
  }
}