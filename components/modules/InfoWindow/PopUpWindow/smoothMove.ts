
export default function smoothMove(tabState, parentTarget, endPointTabstate) {
    console.log(tabState, parentTarget, endPointTabstate);    


    let debounce = 60;
    function loop() {

        // console.log(debounce);
        const curY = parentTarget.getBoundingClientRect().y;
        const endY = endPointTabstate.top;
        // console.log(curY,endY);
        const acc = 0.1;
        const move = curY + (endY - curY) * acc;
        parentTarget.style.setProperty('top',`${move}px`);
        if (debounce <= 1 || Math.abs(curY - endPointTabstate.top) < 1 ) {
            return parentTarget.style.setProperty(
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

