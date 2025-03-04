import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  let api = `https://delirius-apiofc.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`
  let response = await fetch(api);
  let json = await response.json();
  let paisdata = `${json.result.emoji}`;
  let crow = paisdata ? `${paisdata.emoji}` : '🥷'

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '💛';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join` `;
  const oi = `*» INFO :* ${pesan}`;
  let teks = `*!  MENCION GENERAL  !*\n  *PARA ${participants.length} MIEMBROS* 🗣️\n\n ${oi}\n\n╭  ┄ 𝐇𝐍 𝐄𝐋𝐃𝐄𝐑 𝐁𝐎𝐓 🤖 ꒱  ۟  𝅄 ┄\n`;
  for (let i = 0; i < (5 <= json.meta.length ? 5 : json.meta.length); i++) {
  let emojip = json.result.emoji[i];
  for (const mem of participants) {
    teks += `┊${emojip} @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭ *${vs}* ୧ ׅ ꒱  ┄  ─ ┄ ⸼`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;