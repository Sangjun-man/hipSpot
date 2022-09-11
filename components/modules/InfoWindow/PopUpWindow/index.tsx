import React, {
  MouseEventHandler,
  ReactChildren,
  ReactNode,
  TouchEventHandler,
  useEffect,
} from "react";
import { VscGrabber } from "react-icons/vsc";
import { useSetRecoilState } from "recoil";
import { tabStateAtom } from "../../../../libs/states/infoWindowState";
import { TabState } from "../../../../libs/types/infowindow";
import smoothMove from "./smoothMove";
import * as S from "./style";

export interface PopUpWindowProps {
  id: string;
  tabState: TabState;
  children: ReactChildren | ReactNode;
}

const PopUpWindow = ({ id, tabState, children }: PopUpWindowProps) => {
  const setTabState = useSetRecoilState(tabStateAtom);
  let smoothLoopId: { id: number } = { id: -1 };
  const popUpHeights = {
    top: -30,
    middle: window.innerHeight / 2,
    thumbnail: window.innerHeight - 140,
    bottom: window.innerHeight - 30,
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (smoothLoopId) {
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

    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.clientY,
      };
      e.target.parentElement.style.setProperty("top", `${e.clientY - 15}px`);

      const slideEvent = new Event("forSlide");
      slideEvent.clientY = e.clientY;
      document.getElementById("slide")?.dispatchEvent(slideEvent);

      return;
    }
  };
  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;

    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.touches[0].clientY,
      };
      e.target.parentElement.style.setProperty(
        "top",
        `${e.touches[0].clientY - 15}px`
      );

      const slideEvent = new Event("forSlide");
      slideEvent.clientY = e.touches[0].clientY;
      document.getElementById("slide")?.dispatchEvent(slideEvent);

      return;
    }
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = async (e) => {
    const { onHandling } = tabState;

    if (onHandling) {
      const target = e.target as HTMLDivElement;
      const { top } = tabState;
      const endPointTabState = { ...tabState };
      const h = window.innerHeight;
      const ratio = top / h;

      if (ratio < 0.3) {
        endPointTabState.top = popUpHeights.top;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "full";
      } else if (ratio >= 0.3 && ratio < 0.8) {
        endPointTabState.top = popUpHeights.middle;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "half";
      } else {
        endPointTabState.top = popUpHeights.bottom;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "half";
      }

      target.style.setProperty("padding", "0px");
      setTabState(endPointTabState);
    }
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement> = async (e) => {
    const { onHandling } = tabState;

    if (onHandling) {
      const target = e.target as HTMLDivElement;
      const { top } = tabState;
      const endPointTabState = { ...tabState };
      const h = window.innerHeight;
      const ratio = top / h;

      if (ratio < 0.3) {
        endPointTabState.top = popUpHeights.top;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "full";
      } else if (ratio >= 0.3 && ratio < 0.8) {
        endPointTabState.top = popUpHeights.middle;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "half";
      } else {
        endPointTabState.top = popUpHeights.bottom;
        endPointTabState.onHandling = false;
        endPointTabState.popUpState = "half";
      }

      target.style.setProperty("padding", "0px");
      setTabState(endPointTabState);
    }
  };
  useEffect(() => {
    smoothMove({
      parentElement: document.getElementById("popUpWindow") as HTMLDivElement,
      endPointTabState: tabState,
    });
  });
  return (
    <S.Layout id={id}>
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
