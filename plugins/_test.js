/* Penis For all
- https://github.com/WillZek 
- ${channel} me da weba poner esto
*/

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('XD Nmms Puta Madre');

try {
let txt = 'Pene para Mateo';

let img = 'https://files.catbox.moe/igcb80.jpg';

m.react('🤖');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: m });
m.react(done);

} catch (e) {
console.log(e)
m.reply(`Error: ${e.message}`);
m.react(error);
  }
}

handler.tag = ['fun'];
handler.command = ['mateo'];
handler.help = ['mateo'];
handler.owner = true;

export default handler;
