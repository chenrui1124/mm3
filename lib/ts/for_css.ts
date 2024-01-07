import type { HTMLAttributes } from 'vue'

/*
 * CSSInJS
 */
type CSSBaseSelector =
    | `& ${string}`
    | `&>${string}`
    | `& > ${string}`
    | `&[${string}]`
    | `&~${string}`
    | `& ~ ${string}`
    | `&+${string}`
    | `& + ${string}`
    | `&||${string}`
    | `& || ${string}`

type CSSPseudoClassSelector =
    | '&:fullscreen'
    | '&:modal'
    | '&:picture-in-picture'
    | '&:autofill'
    | '&:enabled'
    | '&:disabled'
    | '&:read-only'
    | '&:read-write'
    | '&:placeholder-shown'
    | '&:default'
    | '&:checked'
    | '&:indeterminate'
    | '&:blank'
    | '&:valid'
    | '&:invalid'
    | '&:in-range'
    | '&:out-of-range'
    | '&:required'
    | '&:optional'
    | '&:user-valid'
    | '&:user-invalid'
    | `&:dir(${string})`
    | `&:lang(${string})`
    | '&:any-link'
    | '&:link'
    | '&:visited'
    | '&:local-link'
    | '&:target'
    | '&:target-within'
    | '&:scope'
    | '&:playing'
    | '&:paused'
    | '&:current'
    | '&:past'
    | '&:future'
    | '&:empty'
    | `&:nth-child(${string})`
    | `&:nth-last-child(${string})`
    | `&:nth-of-type(${string})`
    | `&:nth-last-of-type(${string})`
    | '&:first-child'
    | '&:last-child'
    | '&:only-child'
    | '&:first-of-type'
    | '&:last-of-type'
    | '&:only-of-type'
    | '&:hover'
    | '&:active'
    | '&:focus'
    | '&:focus-visible'
    | '&:focus-within'
    | `&:is(${string})`
    | `&:not(${string})`
    | `&:where(${string})`
    | `&:has(${string})`

type CSSPseudoElementSelector =
    | '&::after'
    | '&::backdrop'
    | '&::before'
    | '&::cue'
    | '&::cue-region'
    | '&::first-letter'
    | '&::first-line'
    | '&::first-selector-button'
    | '&::grammar-error'
    | '&::marker'
    | '&::part'
    | '&::placeholder'
    | '&::selection'
    | `&::slotted(${string})`
    | '&::spelling-error'
    | '&::target-text'

type CSSSelector = CSSBaseSelector | CSSPseudoClassSelector | CSSPseudoElementSelector

type CSSVariate = { [P: `--${string}`]: string }

export type CSSInJS = Record<
    string,
    Partial<HTMLAttributes['style']> &
        CSSVariate &
        Partial<Record<CSSSelector, Partial<HTMLAttributes['style']>>>
>

/*
 * PureCSSIconClassName
 */
export type PureCSSIconClassName =
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
