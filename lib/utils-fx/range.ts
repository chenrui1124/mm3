/**
 * @example
 * range(4) // [0, 1, 2, 3]
 * range(1, 3) // [1, 2]
 * range(1, 6, 2) // [1, 3, 5]
 */
export function range(...arg: [start: number, stop: number, step?: number] | [stop: number]) {
    if (arg.length == 1) {
        const stop = arg[0]
        return Array.from({ length: stop }, (_, i) => i)
    } else {
        const start = arg[0],
            stop = arg[1],
            step = arg[2] ?? 1,
            result: number[] = []

        for (let i = start; i < stop; i += step) {
            result.push(i)
        }

        return result
    }
}
