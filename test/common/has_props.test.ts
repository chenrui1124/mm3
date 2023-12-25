import { test, expect } from 'vitest'
import { hasProps } from '@lib'

test('hasProp', () => {
    expect(hasProps({ a: 1, b: 1, 3: 1 }, 'a', 'b', '3', 3)).toBe(true)
})
