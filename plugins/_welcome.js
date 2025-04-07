from telegram import Update, Chat
from telegram.ext import Updater, CommandHandler, CallbackContext

# Función para manejar el comando /start
def start(update: Update, context: CallbackContext) -> None:
    chat = update.effective_chat
    if chat.type in [Chat.GROUP, Chat.SUPERGROUP]:
        group_name = chat.title
        participant_names = [member.user.first_name for member in chat.get_administrators()]
        welcome_message = f"¡Bienvenidos al grupo {group_name}!\nParticipantes: {', '.join(participant_names)}"
        context.bot.send_message(chat_id=chat.id, text=welcome_message)

# Función principal para configurar el bot
def main() -> None:
    # Reemplaza 'YOUR_TOKEN' con el token de tu bot
    updater = Updater("YOUR_TOKEN")

    dispatcher = updater.dispatcher
    dispatcher.add_handler(CommandHandler("start", start))

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()