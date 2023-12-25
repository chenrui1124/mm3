import { test, expect } from 'vitest'
import { hasProp } from '@lib'

test('hasProp', () => {
    expect(hasProp({ a: 1 }, 'a')).toBe(true)
    expect(hasProp({ a: 1 }, 'b')).toBe(false)
    expect(hasProp({ 1: 'a' }, 1)).toBe(true)
    expect(hasProp({ '1': 'a' }, 1)).toBe(true)
})
