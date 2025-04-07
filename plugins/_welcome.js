import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import sharp from 'sharp';

export async function before(m, { conn, participants, groupMetadata }) {
  console.log('Evento de grupo recibido:', m.messageStubType, m.isGroup);

  if (!m.messageStubType || !m.isGroup) return !0;

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
  let img = await (await fetch(pp)).buffer();

  let chat = global.db.data.chats[m.chat];
  console.log('Configuración del chat:', chat);

  if (chat.welcome && m.messageStubType == 27) {
    let userId = m.messageStubParameters[0];
    let userName = userId.split('@')[0];
    let welcome = `
      🌟 ¡Bienvenido/a al grupo ${groupMetadata.subject}! 🌟
      
      👤 Usuario: @${userName}
      📜 Descripción: ${groupMetadata.desc || 'Sin descripción'}
      
      ¡Esperamos que disfrutes tu estadía! 😊
    `;

    console.log('Mensaje de bienvenida:', welcome);

    try {
      const extendedImage = await sharp(img)
        .resize({ width: 1800, height: 700, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer();

      await conn.sendMessage(m.chat, { image: extendedImage, caption: welcome, mentions: [userId] });
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      await conn.sendMessage(m.chat, { image: img, caption: welcome, mentions: [userId] });
    }
  }
}