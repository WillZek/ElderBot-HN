let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('*Opciones de bienvenida* 🍃 \n\n*+tag Menciona al usuario*\n\n*+description Descripcion del grupo*');
  }

  global.welcome = text;
  m.reply('*✦ El mensaje de bienvenida fue cambiado.*');
};

handler.command = ['setwelcome'];
handler.isAdmin = true;

export default handler;