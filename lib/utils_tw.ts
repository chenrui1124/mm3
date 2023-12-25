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
        result[value] = handler(value)
        return result
    }, {})
}
