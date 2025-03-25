
var handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = { 'open': 'not_announcement', 'close': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { return conn.reply(m.chat, `*Elija una opción para configurar el grupo*\n\nEjemplo:\n*○ !${command} abrir*\n*○ !${command} cerrar*\n*○ !${command} bloquear*\n*○ !${command} desbloquear*`, m, rcanal, )}
await conn.groupSettingUpdate(m.chat, isClose)
{ 
conn.reply(m.chat, '*🚩 ÓRDENES RECIBIDAS JEFE*', m)
await m.react(done)
}}
handler.help = ['group abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler
