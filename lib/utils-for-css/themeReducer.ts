/**
 * @example
 * themeReducer([8, 12], v => `${v}%`) // { 8: '8%', 12: '12%'}
 */
export function themeReducer<I extends number | string, O>(
    propNamesArray: I[],
    handler: (v: I) => O
): {
    [p in I]: O
} {
    return propNamesArray.reduce((result: any, value: I) => {
        if (['string', 'number', 'symbol'].includes(typeof value)) result[value] = handler(value)
        else throw new Error('Invalid Property Name.')

        return result
    }, {})
}
