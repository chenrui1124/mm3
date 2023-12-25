export type PureCSSIconClass =
    /*
     * unocss | @egoist/tailwindcss-icons
     * <prefix>-<pkg>-<name>
     */
    | `${string}-${string}-${string}`
    /*
     * unocss
     * <prefix>-<pkg>:<name>
     */
    | `${string}-${string}:${string}`
    /*
     * @iconify/tailwind - addDynamicIconSelectors
     * <prefix>-[<pkg>--<name>]
     */
    | `${string}-[${string}--${string}]`
    /*
     * @iconify/tailwind - addCleanIconSelectors
     * icon--<pkg>
     * icon--<pkg>-<name>
     */
    | `icon--${string}`
    | `icon--${string}--${string}`
