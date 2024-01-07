import { describe, expect, it } from 'vitest'
import { toBase26 } from './__init__'

describe('toBase26', () => {
    it('input > 0', () => {
        expect(toBase26(1)).toBe('a')
        expect(toBase26(5)).toBe('e')
    })

    it('input <= 0', () => {
        expect(toBase26(0)).toBe('')
        expect(toBase26(-1)).toBe('')
    })
})
