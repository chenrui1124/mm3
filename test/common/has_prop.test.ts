import { describe, expect, it } from 'vitest'
import { hasProp } from '@lib'

describe('hasProps', () => {
    it('is true', () => {
        expect(hasProp({ a: 1 }, 'a')).toBe(true)
        expect(hasProp({ 1: 'a' }, 1)).toBe(true)
        expect(hasProp({ '1': 'a' }, 1)).toBe(true)
    })

    it('is false', () => {
        expect(hasProp({ a: 1 }, 'b')).toBe(false)
    })
})
