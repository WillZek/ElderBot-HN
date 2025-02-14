let handler = async (m, { conn, args, text}) => {

let cwho = m.mentionedJid[0]
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat

let user;
if (m.quoted) {
user = m.quoted.sender;
} else if (args.length >= 1) {
user = args[0].replace('@', '') + '@s.whatsapp.net';
} else {
        await conn.reply(m.chat, '🎩 *Ingresa el @tag de algún usuario.*', m);
        return;
    }

/* if (!who && !m.quoted)
return m.reply('🎩 *Ingresa el @tag de algún usuario.*');
*/

let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `✨ *El usuario @${who.split('@')[0]}, fue baneado con éxito.*`, fkontak, { mentions: [who]})
}
handler.help = ['banuser <@tag> <razón>']
handler.command = ['banuser']
handler.tags = ['owner']
handler.owner = true

export default handler