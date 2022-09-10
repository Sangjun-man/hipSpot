import { TabState } from "../../../../libs/types/infowindow";

interface smoothMoveArgs {
    tabState: TabState;
    parentElement: HTMLDivElement;
    endPointTabState: TabState;
    smoothLoopId:{id: number};
}


export default function smoothMove({tabState, parentElement, endPointTabState,smoothLoopId }:smoothMoveArgs) {
    // console.log(tabState, parentElement, endPointTabState);    
    let debounce = 60;
    let curY = parentElement.getBoundingClientRect().y;

    function loop() {
        // console.log(debounce);
        const endY = endPointTabState.top;
        // console.log(curY,endY);
        const acc = 0.1;
        curY = curY + (endY - curY) * acc;
        parentElement.style.setProperty('top', `${curY}px`);
        
        
        const check = ((curY - endPointTabState.top) > -1) && ((curY - endPointTabState.top) < 1);
        // console.log(debounce, check);
        // console.log(smoothLoopId);
        if (debounce <= 1 || check) {
            return parentElement.style.setProperty(
            "top",
            `${endPointTabState.top}`
          );}
        else {
            debounce--;
            return smoothLoopId.id = requestAnimationFrame(loop);
        }
    }
    smoothLoopId.id = loop()!;
}

