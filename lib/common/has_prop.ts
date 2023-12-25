export function hasProp(object: object | Function, name: string | number | symbol): boolean {
    if (object && name && (typeof object == 'object' || typeof object == 'function')) {
        return Object.prototype.hasOwnProperty.call(object, name)
    } else {
        return false
    }
}
