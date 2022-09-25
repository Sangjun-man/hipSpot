import React, {
  MouseEventHandler,
  ReactChildren,
  ReactNode,
  TouchEventHandler,
  useEffect,
  useRef,
} from "react";
import { VscGrabber } from "react-icons/vsc";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tabStateAtom } from "../../../../libs/states/infoWindowState";
import { cameraStateAtom } from "../../../../libs/states/map/map";
import { TabState } from "../../../../libs/types/infowindow";
import smoothMove from "./smoothMove";
import * as S from "./style";

export interface PopUpWindowProps {
  id: string;
  tabState: TabState;
  children: ReactChildren | ReactNode;
  smoothLoopId: { id: number };
}

const PopUpWindow = ({
  id,
  tabState,
  children,
  smoothLoopId,
}: PopUpWindowProps) => {
  const setTabState = useSetRecoilState(tabStateAtom);
  const [cameraState, setCameraState] = useRecoilState(cameraStateAtom);
  const modifyRef = useRef<number>(0);

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
    target.style.setProperty("padding", "calc(var(--vh,1vh) * 100) 0");
    target.style.setProperty("transform", "translateY(-50%)");

    console.log(target.parentElement.getBoundingClientRect().top, e.clientY);
    modifyRef.current =
      target.parentElement.getBoundingClientRect().top - e.clientY;
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
    target.style.setProperty("padding", "calc(var(--vh,1vh) * 100) 0");
    target.style.setProperty("transform", "translateY(-50%)");

    modifyRef.current =
      target.parentElement.getBoundingClientRect().top - e.touches[0].clientY;
    console.log(e.touches[0].clientY);
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;

    if (onHandling) {
      tabState = {
        ...tabState,
        top: e.clientY,
      };
      e.target.parentElement.style.setProperty(
        "top",
        `${e.clientY + modifyRef.current}px`
      );

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
        `${e.touches[0].clientY + modifyRef.current}px`
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
        endPointTabState.popUpState = "thumbNail";
        setCameraState({ ...cameraState, markerClicked: false });
      }

      target.style.setProperty("padding", "0px");
      target.style.removeProperty("transform");

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
        endPointTabState.popUpState = "thumbNail";
        setCameraState({ ...cameraState, markerClicked: false });
      }

      target.style.setProperty("padding", "0px");
      target.style.removeProperty("transform");

      setTabState(endPointTabState);
    }
  };

  const onPopUpTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.scrollTop < -100) {
      if (smoothLoopId) cancelAnimationFrame(smoothLoopId.id);
      const endPointTabState = { ...tabState };
      endPointTabState.top = popUpHeights.bottom;
      endPointTabState.onHandling = false;
      endPointTabState.popUpState = "thumbNail";
      setTabState(endPointTabState);
      setCameraState({ ...cameraState, markerClicked: false });
    }
  };
  useEffect(() => {
    smoothMove({
      parentElement: document.getElementById("popUpWindow") as HTMLDivElement,
      endPointTabState: tabState,
      smoothLoopId,
    });
  });
  return (
    <S.Layout id={id} tabState={tabState}>
      <S.Wrapper onTouchMove={onPopUpTouchMove}>{children}</S.Wrapper>
      <S.ResizeSideStyle>
        <VscGrabber />
      </S.ResizeSideStyle>

      <S.ResizeSide
        tabState={tabState}
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
