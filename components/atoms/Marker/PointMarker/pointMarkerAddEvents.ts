import style from './point.module.css'
const { mouseOver, mouseOut } = style;

export const AddPointMarkerEvents = (el: HTMLElement) => {

  el.addEventListener("mouseover", mouseOverListenerFunction  )
  el.addEventListener("mouseout", mouseOutListenerFunction)
  el.addEventListener("touchover",mouseOutListenerFunction)
}


function mouseOverListenerFunction(this: HTMLElement, e: Event) {
  e.preventDefault();
  this.style.zIndex = "10";
  const child = this.firstElementChild as Element
  if (this.firstElementChild) {
    child.classList.remove(mouseOut)
    child.classList.add(mouseOver)
  };
}

function mouseOutListenerFunction(this: HTMLElement, e: Event) {
  e.preventDefault();
  this.style.zIndex = "0";
   const child  = this.firstElementChild as Element
  if (this.firstElementChild) {
    child.classList.remove(mouseOver)
    child.classList.add(mouseOut)
  };
}
