import * as React from "react";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface PinContainerProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface PinContainerState extends ComponentBaseState {

}

export class PinContainer extends ComponentBase<PinContainerProperties, PinContainerState>{
}