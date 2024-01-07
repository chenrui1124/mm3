import { hasProp } from './hasProp'

export function hasProps(object: object, ...arg: [string | number, ...(string | number)[]]) {
    return arg.every(prop => hasProp(object, prop))
}
