import { describe, expect, it } from 'vitest'
import { lorem } from '@lib'

describe('lorem', () => {
    it('return English text', () => {
        expect(lorem()).toBe(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla ad magnam labore maxime architecto neque beatae necessitatibus, quae atque. Aliquam quaerat incidunt labore ipsa aliquid temporibus delectus architecto totam?'
        )
    })

    it('return Chinese text', () => {
        expect(lorem('sc')).toBe(
            '鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认，乃是世界自由、正义与和平的基础，鉴于对人权的无视和侮蔑已发展为野蛮暴行，这些暴行玷污了人类的良心，而一个人人享有言论和信仰自由并免予恐惧和匮乏的世界的来临，已被宣布为普通人民的最高愿望。'
        )
    })

    it('only contain Chinese punctuation mark', () => {
        expect(lorem('sc')).toContain('，')
        expect(lorem('sc')).toContain('。')
        expect(lorem('sc')).not.toContain(',')
        expect(lorem('sc')).not.toContain('.')
    })

    it('only contain English punctuation mark', () => {
        expect(lorem()).toContain(',')
        expect(lorem()).toContain('.')
        expect(lorem()).not.toContain('，')
        expect(lorem()).not.toContain('。')
    })
})
