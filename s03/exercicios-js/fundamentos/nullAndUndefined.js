/** undefined
 *  
 * Utilizado a nível de sistema para indicar que:
 * - O valor de uma variável que não foi incializada;
 * - O valor de uma propriedade de um objeto não existe;
 * - O valor de um elemento de um array não existe;
 * - O retorno de funções que não tem retorno definido;
 * - Atributos de funções que não foram definidos 
 * 
 */

 /** null
  * 
  * Utilizado a nível de programa pelo desenvolvedor 
  * para indicar a ausência de valor
  *  
  */

  /** Semelhanças e diferenças
   * 
   * - Ambos indicam a ausência de valor;
   * - null é uma palavra reservada e apresenta typeof -> object
   * - undefined é uma variável apenas de leitura (ES5) predefinida
   * pelos sistema, cujo valor é undefined e typeof -> undefined
   * - Ambos são valores falsos e não aprensentam métodos ou propriedades. A tentativa 
   * de acessar um método ou propriedade causa um TypeError. 
   * 
   */

   const valueNull      = null
   const valueUndefined = undefined

   console.log(typeof valueNull) // Retorna object
   console.log(typeof valueUndefined) // Retorna undefined

   console.log(valueNull == valueUndefined) // Retorna true
   console.log(valueNull === valueUndefined) // Retorna false
