import { test, expect } from 'vitest'
import { lorem } from '@lib'

test('lorem', () => {
    expect(lorem()).toBe(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla ad magnam labore maxime architecto neque beatae necessitatibus, quae atque. Aliquam quaerat incidunt labore ipsa aliquid temporibus delectus architecto totam?'
    )
    expect(lorem('sc')).toContain('，')
    expect(lorem('sc')).toContain('。')
    expect(lorem('sc')).not.toContain(',')
    expect(lorem('sc')).not.toContain('.')
})
