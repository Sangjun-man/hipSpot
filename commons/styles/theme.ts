import { CSSProperties } from 'react';
import { themeCSSTypes } from "../../types/type";
declare module "@emotion/react" {
    export interface Theme extends CSSProperties{
    }
}

export type buttonType =
    "primary"
    | "secondary";

    
export const buttonTheme: themeCSSTypes<buttonType> = {
    
    "primary": {
        backgroundColor:"rgba(255, 65, 99, 1)",
    },
    "secondary": {
        backgroundColor:"rgba(255, 65, 99, 0.85)",
    }
    
}


