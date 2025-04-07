import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { participants, args }) => {
  const pesan = args.join` `;
  const oi = `*» INFO :* ${pesan}`;
  let mensajes = `*╭━* 𝘼𝘾𝙏𝙄𝙑𝙀𝙉𝙎𝙀𝙉 乂\n  *PARA ${participants.length} MIEMBROS* 🗣️\n\n ${oi}\n\n*╭━*⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊\n`;

  for (const mem of participants) {
    let numero = PhoneNumber('+' + mem.id.replace('@s.whatsapp.net', '')).getNumber('international');
    let api = `https://delirius-apiofc.vercel.app/tools/country?text=${numero}`;
    let response = await fetch(api);
    let json = await response.json();
    
    let paisdata = json.result ? json.result.emoji : '🏳️';
    mensajes += `${paisdata} @${mem.id.split('@')[0]}\n`;
  }

    mensajes += `*╰━* 𝙃𝙉 𝙀𝙇𝘿𝙀𝙍-𝘽𝙊𝙏`;

  conn.sendMessage(m.chat, { text: mensajes, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;