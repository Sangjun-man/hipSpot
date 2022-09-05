import React, {
  MouseEventHandler,
  ReactChildren,
  ReactNode,
  TouchEventHandler,
} from "react";
import { PopUpWindowState } from "../../../../container/modules/InfoWindowContainer";
import smoothMove from "./smoothMove";
import * as S from "./style";

export interface PopUpWindowProps {
  popUpState: PopUpWindowState;
  tabState: TabState;
  children: ReactChildren | ReactNode;
}
export interface TabState {
  onHandling: boolean;
  top: number;
}

const PopUpWindow = ({ popUpState, tabState, children }: PopUpWindowProps) => {
  let smoothLoopId: { id: number } = { id: null };

  console.log(smoothLoopId);

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
    target.style.setProperty("padding", "100vh");
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
    target.style.setProperty("padding", "100vh");
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;

    // console.log("마우스 움직임", onHandling);
    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.clientY,
      };
      e.target.parentElement.style.setProperty("top", `${e.clientY}px`);
      console.log(e.clientY);
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
        `${e.touches[0].clientY}px`
      );
      // console.log(e.touches[0].clientY);
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
      endPointTabstate.top = 0;
      endPointTabstate.onHandling = false;
    } else if (ratio >= 0.3 && ratio < 0.8) {
      endPointTabstate.top = window.innerHeight / 2;
      endPointTabstate.onHandling = false;
    } else {
      endPointTabstate.top = window.innerHeight - 20;
      endPointTabstate.onHandling = false;
    }

    target.style.setProperty("padding", "0px");
    target.style.setProperty("top", "0px");
    // e.target.parentElement.style.setProperty("top", `${endPointTabstate.top}`);

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
      endPointTabstate.top = window.innerHeight - 20;
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

  return (
    <S.Layout popUpState={popUpState}>
      <S.Wrapper>{children}</S.Wrapper>
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
