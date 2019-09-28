/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof (bytes) !== 'number' || bytes < 0)
    return false
  const PREFIX = 'KMGTPEZY' // Kilobyte, Megabyte, ...
  const BASE = 1024
  if (bytes < BASE)
    return `${bytes} B`
  const power = Math.floor(Math.log(bytes) / Math.log(BASE))
  const result = (bytes / Math.pow(BASE, power)).toFixed(3)
  if (power < PREFIX.length)
    return `${result} ${PREFIX[power - 1]}B`
  return false
}
