export type initTheme = {
    color: {
        [key: string]: string,
    }
    button: {
        [key: string] : string, 
    }
    marker: {
        [key: string]: string,
    }
    font: {
        [key: string]: string,
    }
}



export const initTheme:initTheme = {
    color: {
        card_tint: `rgba(228, 66, 105, 0.9)`,
        info_title:`rgba(228, 66, 105, 1)`
        
    },
    button: {
        info_insta: `rgba(255, 65, 99, 1)`,
        info_findWay: `rgba(255, 65, 99, 0.85)`
    },
    marker: {
        map_selected: `rgba(224, 35, 92, 1)`,
        map_place: `#000000`
    },
    font: {
        card_title : `rgba(228, 66, 105, 0.9)`
    }
}



