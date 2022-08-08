
export type themeCSSTypes<theme extends string> = {
    [K in theme]: React.CSSProperties
}



export type FilterList = {
    categories: string[],
    items: string[],
    id?: string
};


export type ActiveFilterState = {
    placeType: string;
    name: string,
    selected: boolean,
}

export type ActiveFilterList =  Array<ActiveFilterState>


