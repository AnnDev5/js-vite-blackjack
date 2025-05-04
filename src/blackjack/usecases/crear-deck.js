import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {Array<String>} tiposDeCarta ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales ejemplo: ["A", "J", "Q", "K"]
 * @returns {array} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCarta) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tiposDeCarta) {
      for (let especial of tiposEspeciales) deck.push(especial + tipo);
    }
    //console.log(deck);
    //Instalar Underscore el que diga UMD (Production) 	7.48 KB, Minified and Gzipped  (Source Map)
    //Metod que permite barajear el Deck
    return _.shuffle(deck);
  };