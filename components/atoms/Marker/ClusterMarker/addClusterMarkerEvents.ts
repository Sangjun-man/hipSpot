import style from './cluster.module.css'
const { mouseOver, mouseOut } = style;

export const addClusterMarkerEvents = (el: HTMLElement) => {

  el.addEventListener("mouseover", mouseOverListenerFunction  )
  el.addEventListener("mouseout", mouseOutListenerFunction)
  el.addEventListener("touchover",mouseOutListenerFunction)
}


function mouseOverListenerFunction(this: HTMLElement, e: Event) {
  e.preventDefault();
  e.stopPropagation()


  const child  = this.firstChild as Element
  if (this.firstChild) {
    child.classList.remove(mouseOut)
    child.classList.add(mouseOver)
  };
  

  for (let i = 0; i < child.children.length; i++) {
    let leaf = child.children[i]
    leaf.classList.add('cl-active')
  }
  
}

function mouseOutListenerFunction(this: HTMLElement, e: Event) {
  e.preventDefault();
  e.stopPropagation()

  const child  = this.firstChild as Element
  if (this.firstChild) {
    child.classList.remove(mouseOver)
    child.classList.add(mouseOut)
  };
  for (let i = 0; i < child.children.length; i++) {
    let leaf = child.children[i]
    leaf.classList.remove("cl-active")
  }
  
}
