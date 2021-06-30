import React, { ReactNode } from "react";
import Intro1 from "../../../assets/images/ic_intro_1.svg";
import Intro2 from "../../../assets/images/ic_intro_2.svg";
import Intro3 from "../../../assets/images/ic_intro_3.svg";
import { string } from "../../../util/constants";

class IntroScreenModel {
  asset: ReactNode;
  heading: string;
  description: string;
  isLastItem?: boolean;

  //constructor
  constructor(
    asset: ReactNode,
    heading: string,
    description: string,
    isLastItem: boolean = false
  ) {
    this.asset = asset;
    this.heading = heading;
    this.description = description;
    this.isLastItem = isLastItem;
  }
}

const introScreens: IntroScreenModel[] = [
  new IntroScreenModel(
    <Intro1 />,
    string.ONOARDING_1_TITLE,
    string.ONOARDING_1_DESC
  ),
  new IntroScreenModel(
    <Intro2 />,
    string.ONOARDING_2_TITLE,
    string.ONOARDING_2_DESC
  ),
  new IntroScreenModel(
    <Intro3 />,
    string.ONOARDING_3_TITLE,
    string.ONOARDING_3_DESC,
    true
  ),
];

export { IntroScreenModel, introScreens };
