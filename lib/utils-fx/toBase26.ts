export function toBase26(number: number): string {
    let result = ''
    while (number > 0) {
        let remainder = (number - 1) % 26
        result = String.fromCharCode('a'.charCodeAt(0) + remainder) + result
        number = Math.floor((number - 1) / 26)
    }
    return result
}
