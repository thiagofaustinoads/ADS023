/*
 * sintaxe para exportar um modulo
 */
const nome_do_modulo = { }
export { nome_do_modulo }
// ou
export default nome_do_modulo

// exemplo de exportacao
const App = () => { }
export default App

 /*
  * sintaxe para importar um modulo
  */
import { nome_do_modulo } from nome_do_arquivo

// exemplo de importacao
import { App } from './app.js'