import { toBase26 } from '@'

/**
 * Create a auto-incremented letter index.
 *
 * @example
 * const an = new LetterIndex()
 * const i = an.get() // 'a'
 * const i = an.get() // 'b'
 */
export class LetterIndex {
    private start: string
    private count: number

    constructor(start = 'a') {
        this.start = start
        this.count = this.start.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    }

    get() {
        const result = toBase26(this.count)
        this.count++
        return result
    }

    /**
     * Reset to input start value.
     */
    reset() {
        this.count = this.start.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    }
}
