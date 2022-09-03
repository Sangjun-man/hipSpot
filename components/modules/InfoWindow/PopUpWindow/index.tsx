import { css } from "@emotion/react";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { PopUpWindowState } from "../../../../container/modules/PopUpWindowContainer";
import smoothMove from "./smoothMove";
import * as S from "./style";

interface PopUpWindowProps {
  popUpState: PopUpWindowState;
  children: React.ReactChildren;
}

let tabState: { onHandling: boolean; top: number } = {
  onHandling: false,
  top: window.innerHeight - 20,
};

const PopUpWindow = ({ popUpState, children }: PopUpWindowProps) => {
  // const [tabState, setTabState] = useState(initTabState);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    tabState = {
      ...tabState,
      onHandling: true,
    };
    target.style.setProperty("padding", "100vh");
  };
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { onHandling } = tabState;
    console.log("마우스 움직임", onHandling);
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

    await smoothMove(tabState, e.target.parentElement, endPointTabstate);
    tabState = endPointTabstate;
  };

  return (
    <S.Layout popUpState={popUpState}>
      <S.Wrapper>{children}</S.Wrapper>
      <S.ResizeSide
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      />
    </S.Layout>
  );
};

export default PopUpWindow;
