/*
    Os modulos podem ser usados com o atributo type="module", em seguida, possui dois tipos de exportações de modulos:
        export(nomeado): Pode haver vários exports pode ser mais de um por arquivo.

        export default(padrao): Somente um por arquivo.
*/

import player from './app.js'

window.addEventListener("load", player.start());