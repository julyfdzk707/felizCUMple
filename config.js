/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // Personaliza estos datos
  name: "Querido Anthony",
  photo: "./img/af.jpg",
  music: "./music/song_writing_by_brad-can-you-do-a-mj-447026 (1).mp3",

  // Estilo elegante: negro, dorado y blanco
  colors: {
    primary: "#d4af37",
    accent: "#f5d76e",
    dark: {
      background: "#090909",
      text: "#f5f0e5",
    },
    light: {
      background: "#f8f5ed",
      text: "#252116",
    },
  },

  defaultMode: "dark",

  sections: [
    {
      type: "greeting",
      title: "Hola",
      subtitle: "Hoy es un día especial para alguien increíble.",
    },
    {
      type: "countdown",
      from: 3,
      goText: "✦",
    },
    {
      type: "announcement",
      text: "¡Feliz cumpleaños!",
    },
    {
      type: "chatbox",
      message:
        "Ojala pudiera estar para celebrar este dia como se debe, Anthony... mucho que decir aun asi a mis ojos sigues siendo un hombre maravilloso y espero que hoy tengas un exelente dia hoy",
      buttonText: "Abrir mensaje",
    },
    {
      type: "ideas",
      lines: [
        " A pesar de todo...",
        "Sin importar el tiempo o la distancia.",
        "eres y seras una persona muy importante para mi.",
        "es por eso que hoy celebro.",
        "¡porque tu sonrisa lo es todo!",
      ],
      bigLetters: "FELIZ",
    },
    {
      type: "quote",
      text: "Los mejores recuerdos nacen de los momentos sencillos y de las personas que los hacen especiales.",
      author: "Para ti, con amor y cariño",
    },
    {
      type: "stars",
      count: 27,
    },
    {
      type: "profile",
      wishTitle: "Un recuerdo para siempre",
      wishText:
        "una foto bonita para alguien bonito.",
    },
    {
      type: "fireworks",
      count: 18,
    },
    {
      type: "confetti",
      count: 8,
    },
    {
      type: "closing",
      text: "Gracias por todo. ¡Que tengas un cumpleaños inolvidable!",
      replayText: "Vuelve a ver tu sorpresa",
    },
  ],
};
