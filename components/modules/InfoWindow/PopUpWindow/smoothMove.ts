import { TabState } from ".";

interface smoothMoveArgs {
    tabState: TabState;
    parentElement: HTMLDivElement;
    endPointTabstate : TabState;
}


export default function smoothMove({tabState, parentElement, endPointTabstate}:smoothMoveArgs) {
    console.log(tabState, parentElement, endPointTabstate);    


    let debounce = 60;
    function loop() {

        // console.log(debounce);
        const curY = parentElement.getBoundingClientRect().y;
        const endY = endPointTabstate.top;
        // console.log(curY,endY);
        const acc = 0.1;
        const move = curY + (endY - curY) * acc;
        parentElement.style.setProperty('top',`${move}px`);
        if (debounce <= 1 || Math.abs(curY - endPointTabstate.top) < 1 ) {
            return parentElement.style.setProperty(
            "top",
            `${endPointTabstate.top}`
          );}
        else {
            debounce--;
            return requestAnimationFrame(loop);
        }
    }
//     return new Promise((resolve, reject) => {
//         const a = loop();
//         console.log(a);
//         // resolve(loop());
// })
    loop();
}

