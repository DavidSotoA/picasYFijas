const constants = {
  "CLASS_BUTTON_NUMBER": "buttonNumber",
  "CLASS_BUTTON_NUMBER_ACTIVE" : "buttonNumber_active",

  "MESSAGE_INIT": 'Presiona el boton "Jugar!" para comenzar',
  "MESSAGE_OBJECTIVE": "Debes descubrir el número secreto de cuatro cifras. Buena suerte!!!.",
  "MESSAGE_PLAY": "Psss... selecciona cuatro números diferentes ;).",
  "MESSAGE_FAIL": "Debes seleccionar cuatro números para continuar.",
  "MESSAGE_WIN": "                *****************************************"+'\n'+
                 "                * | |                             |     *"+'\n'+
                 "                * |=| /=| /==   /=| /=| /=\\ /=| /=| /=\\ *"+'\n'+
                 "                * | | \\=| ==/   \\=| \\=| | | \\=| \\=| \\=/ *"+'\n'+
                 "                *               \\=|                     *"+'\n'+
                 "                *****************************************"+'\n\n'+
                 'Quieres jugar de nuevo?, haz click en "Jugar!" :)',



  MESSAGE_LOSE: (num) => "                 ******************************************"+'\n'+"                 * | |                        |     |     *"+'\n'+"                 * |=| /=| /==   |=\\ /=\\ /= /=| = /=| /=\\ *"+'\n'+"                 * | | \\=| ==/   |=/ \\=  |  \\=| | \\=| \\=/ *"+'\n'+"                 *               |                        *"+'\n'+"                 ******************************************"+'\n\n'+`Oops se te acabaron los intentos :(. El número es ${num}.Intenta de nuevo haciendo click en el boton "Jugar!"`,

   MESSAGE_RESULT: (picas, fijas) => `${picas} de tus números estan en la posición incorrecta, ${fijas} de tus números estan en la posición correcta.`
}
