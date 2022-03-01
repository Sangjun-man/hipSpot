
export type themeCSSTypes<theme extends string> = {
    [K in theme]: React.CSSProperties
}
