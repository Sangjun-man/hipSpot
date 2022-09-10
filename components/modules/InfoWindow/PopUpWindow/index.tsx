import React, {
  MouseEventHandler,
  ReactChildren,
  ReactNode,
  TouchEventHandler,
  useEffect,
} from "react";
import { VscGrabber } from "react-icons/vsc";
import { TabState } from "../../../../libs/types/infowindow";
import smoothMove from "./smoothMove";
import * as S from "./style";

export interface PopUpWindowProps {
  tabState: TabState;
  children: ReactChildren | ReactNode;
}

const PopUpWindow = ({ tabState, children }: PopUpWindowProps) => {
  let smoothLoopId: { id: number } = { id: -1 };
  const popUpHeights = {
    top: 0,
    middle: window.innerHeight / 2,
    thumbnail: window.innerHeight - 140,
    bottom: window.innerHeight - 30,
  };
  // console.log(smoothLoopId);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("mouseDown");
    if (smoothLoopId) {
      console.log("cancel");
      cancelAnimationFrame(smoothLoopId.id);
    }

    const target = e.target as HTMLDivElement;
    tabState = {
      ...tabState,
      onHandling: true,
    };
    target.style.setProperty("padding", "100vh 0");
  };
  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    console.log("touch");
    if (smoothLoopId) {
      console.log("cancel");
      cancelAnimationFrame(smoothLoopId.id);
    }

    const target = e.target as HTMLDivElement;
    tabState = {
      ...tabState,
      onHandling: true,
    };
    target.style.setProperty("padding", "100vh 0");
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;

    // console.log("마우스 움직임", onHandling);
    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.clientY,
      };
      e.target.parentElement.style.setProperty("top", `${e.clientY - 15}px`);
      // console.log(e.clientY);

      const slideEvent = new Event("forSlide");
      slideEvent.clientY = e.clientY;
      document.getElementById("slide")?.dispatchEvent(slideEvent);

      return;
    }
  };
  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;

    // console.log("마우스 움직임", onHandling);
    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.touches[0].clientY,
      };
      e.target.parentElement.style.setProperty(
        "top",
        `${e.touches[0].clientY - 15}px`
      );
      // console.log(e.touches[0].clientY);

      const slideEvent = new Event("forSlide");
      slideEvent.clientY = e.touches[0].clientY;
      document.getElementById("slide")?.dispatchEvent(slideEvent);

      return;
    }
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = async (e) => {
    const target = e.target as HTMLDivElement;
    // console.log("마우스 들어올림", tabState.onHandling);
    const { top } = tabState;
    const endPointTabstate = { ...tabState };
    const h = window.innerHeight;
    const ratio = top / h;
    console.log(e.target, ratio);

    if (ratio < 0.3) {
      endPointTabstate.top = popUpHeights.top;
      endPointTabstate.onHandling = false;
    } else if (ratio >= 0.3 && ratio < 0.8) {
      (endPointTabstate.top = popUpHeights.middle),
        (endPointTabstate.onHandling = false);
    } else {
      endPointTabstate.top = popUpHeights.bottom;
      endPointTabstate.onHandling = false;
    }

    target.style.setProperty("padding", "0px");
    target.style.setProperty("top", "0px");
    smoothMove({
      tabState,
      parentElement: e.target.parentElement,
      endPointTabstate,
      smoothLoopId,
    });
    tabState = endPointTabstate;
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement> = async (e) => {
    const target = e.target as HTMLDivElement;
    // console.log("마우스 들어올림", tabState.onHandling);
    const { top } = tabState;
    const endPointTabstate = { ...tabState };
    const h = window.innerHeight;
    const ratio = top / h;
    // console.log(e.target, ratio);

    if (ratio < 0.3) {
      endPointTabstate.top = 0;
      endPointTabstate.onHandling = false;
    } else if (ratio >= 0.3 && ratio < 0.8) {
      endPointTabstate.top = window.innerHeight / 2;
      endPointTabstate.onHandling = false;
    } else {
      endPointTabstate.top = window.innerHeight - 30;
      endPointTabstate.onHandling = false;
    }

    target.style.setProperty("padding", "0px");
    target.style.setProperty("top", "0px");

    smoothMove({
      tabState,
      parentElement: e.target.parentElement,
      endPointTabstate,
      smoothLoopId,
    });
    tabState = endPointTabstate;
  };
  // useEffect(() => {
  //   console.log(document.getElementById("slide"));
  // });
  return (
    <S.Layout>
      <S.Wrapper>{children}</S.Wrapper>
      <S.ResizeSideStyle>
        <VscGrabber />
      </S.ResizeSideStyle>

      <S.ResizeSide
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      />
    </S.Layout>
  );
};

export default PopUpWindow;
