/*
 * sintaxe para exportar um modulo
 */
const nome_do_modulo = { }
export default nome_do_modulo

// exemplo de exportacao
const Apps = () => { }
export default Apps

 /*
  * sintaxe para importar um modulo
  */
import { nome_do_modulo } from nome_do_arquivo_sem_extensao

// exemplo de importacao
import { Apps } from './modulo.apps'