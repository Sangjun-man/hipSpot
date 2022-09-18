import { TabState } from "../../../../libs/types/infowindow";

interface smoothMoveArgs {
    parentElement: HTMLDivElement;
    endPointTabState: TabState;
}


export default function smoothMove({parentElement, endPointTabState }:smoothMoveArgs) {   
    let debounce = 60;
    const smoothLoopId = { id: -1 };
    let curY = parentElement.getBoundingClientRect().y;
    function loop() {

        const endY = endPointTabState.top;
        const acc = 0.1;
        curY = curY + (endY - curY) * acc;
        parentElement.style.setProperty('top', `${curY}px`);
        const check = ((curY - endPointTabState.top) > -1) && ((curY - endPointTabState.top) < 1);
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

