var handler = async (m, { conn, text, usedPrefix, command}) => {

let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img, nametag

try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
nametag = conn.getName(m.sender);
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = '🎩 *Ingresa el @tag de algún usuario.*'
const nn = conn.getName(m.sender);
if (!text && !m.quoted) return conn.reply(m.chat, bant, m, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, `🚩 @${bot} *No puede ser baneado con este comando*`, m, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `🚩 *No puedo banear a ningun mod de este bot*`, m, { mentions: [aa] })
return
}}
users = global.db.data.users 
users[user].banned = true
usr = m.sender.split('@')[0]     
    conn.reply(m.chat, `✦ *El usuario @${who.split('@')[0]} Fue baneado*`, fkontak, { mentions: [who] });   
}} catch (e) {
await conn.reply(m.chat, `🚩 *Ocurrió un fallo* ${e.message}`, m, )
console.log(e) 
}

}
handler.help = ['banuser <@tag> <razón>'];
handler.command = ['banuser'];
handler.tags = ['owner'];
handler.rowner = true;
handler.group = true;

export default handler