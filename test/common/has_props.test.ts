import { describe, expect, it } from 'vitest'
import { hasProps } from '@lib'

describe('hasProps', () => {
    it('is true', () => {
        expect(hasProps({ a: 1, b: 1, 3: 1 }, 'a', 'b', '3', 3)).toBe(true)
    })

    it('is false', () => {
        expect(hasProps({ a: 1, b: 1, 3: 1 }, 'a', 'b', '3', 4)).toBe(false)
    })
})
