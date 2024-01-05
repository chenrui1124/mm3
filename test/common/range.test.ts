import { describe, expect, it } from 'vitest'
import { range } from '@lib'

describe('range', () => {
    it('has 1 argument - stop', () => {
        expect(range(3)).toEqual([0, 1, 2])
    })

    it('has 2 arguments - start, stop', () => {
        expect(range(5, 10)).toEqual([5, 6, 7, 8, 9])
    })

    it('has 3 arguments - start, stop, step', () => {
        expect(range(1, 3, 2)).toEqual([1])
    })
})
