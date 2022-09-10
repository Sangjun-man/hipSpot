import { TabState } from ".";

interface smoothMoveArgs {
    tabState: TabState;
    parentElement: HTMLDivElement;
    endPointTabstate: TabState;
    smoothLoopId:{id: number};
}


export default function smoothMove({tabState, parentElement, endPointTabstate,smoothLoopId }:smoothMoveArgs) {
    // console.log(tabState, parentElement, endPointTabstate);    
    let debounce = 60;
    let curY = parentElement.getBoundingClientRect().y;

    function loop() {
        // console.log(debounce);
        const endY = endPointTabstate.top;
        // console.log(curY,endY);
        const acc = 0.1;
        curY = curY + (endY - curY) * acc;
        parentElement.style.setProperty('top', `${curY}px`);
        
        
        const check = ((curY - endPointTabstate.top) > -1) && ((curY - endPointTabstate.top) < 1);
        // console.log(debounce, check);
        // console.log(smoothLoopId);
        if (debounce <= 1 || check) {
            return parentElement.style.setProperty(
            "top",
            `${endPointTabstate.top}`
          );}
        else {
            debounce--;
            return smoothLoopId.id = requestAnimationFrame(loop);
        }
    }
    smoothLoopId.id = loop()!;
}

