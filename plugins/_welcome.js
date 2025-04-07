import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import sharp from 'sharp';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
  let img = await (await fetch(pp)).buffer();

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = global.welcome
      .replace('+tag', `@${m.messageStubParameters[0].split('@')[0]}`)
      .replace('+description', groupMetadata.desc || 'Sin descripción');

    try {
      const extendedImage = await sharp(img)
        .resize({ width: 1800, height: 700, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer();

      await conn.sendMini(m.chat, redes, dev, welcome, extendedImage, extendedImage, redeshost);
    } catch (error) {
      console.error('Error', error);
      await conn.sendMini(m.chat, redes, dev, welcome, img, img, redeshost);
    }
  }
}