/*
 * AsReadonly
 */
export type AsReadonly<T> = Readonly<T> | T

/*
 * Either
 */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

export type Either<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U
