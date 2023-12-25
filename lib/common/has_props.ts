import { hasProp } from './has_prop'

export function hasProps(object: object, ...arg: [string | number, ...(string | number)[]]) {
    return arg.every(prop => hasProp(object, prop))
}
