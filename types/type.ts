
export type themeCSSTypes<theme extends string> = {
    [K in theme]: React.CSSProperties
}



export type FilterState = {categories:Array<String>, items:Array<String>}