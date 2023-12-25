export function lorem(language: 'sc' | 'en' = 'en'): string {
    if (language == 'sc') {
        return '鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认，乃是世界自由、正义与和平的基础，鉴于对人权的无视和侮蔑已发展为野蛮暴行，这些暴行玷污了人类的良心，而一个人人享有言论和信仰自由并免予恐惧和匮乏的世界的来临，已被宣布为普通人民的最高愿望。'
    } else {
        return 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla ad magnam labore maxime architecto neque beatae necessitatibus, quae atque. Aliquam quaerat incidunt labore ipsa aliquid temporibus delectus architecto totam?'
    }
}
