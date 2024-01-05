import { describe, expect, it } from 'vitest'
import { themeReducer } from '@lib'

describe('themeReducer', () => {
    it('output object', () => {
        expect(themeReducer([8, 12], v => `${v}%`)).toEqual({ 8: '8%', 12: '12%' })
    })

    it('throws error', () => {
        // @ts-expect-error
        expect(themeReducer([null, null], v => '')).toThrowError()
    })
})
