import { describe, expect, test } from 'vitest'
import { range } from '@lib'

describe('range', () => {
    test('input - stop', () => {
        expect(range(3)).toEqual([0, 1, 2])
    })

    test('input - start, stop, step', () => {
        expect(range(5, 10)).toEqual([5, 6, 7, 8, 9])
        expect(range(1, 3, 2)).toEqual([1])
    })
})
