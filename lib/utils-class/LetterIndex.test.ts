import { describe, expect, it } from 'vitest'
import { LetterIndex } from './LetterIndex'

describe('LetterIndex', () => {
    const an = new LetterIndex()

    it('method - get()', () => {
        for (let i = 0; i < 26; i++) {
            an.get()
        }

        expect(an.get()).toBe('aa')
        expect(an.get()).toBe('ab')
    })

    it('method - reset()', () => {
        an.reset()
        expect(an.get()).toBe('a')
    })
})
