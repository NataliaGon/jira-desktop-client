import * as React from "react";

export type ComponentBaseSkin = "default";
export type TextSize = "large" | "medium" | "regular" | "small";
export type TextColor = "black" | "grey" | "blue" | "white";
export type IconColor = TextColor | "";
export type FontFamily = "regular" | "serif" | "icons";

export class DefaultTextProperties {
    textSize: TextSize = "regular";
    textColor: TextColor = "grey";
    fontFamily: FontFamily = "regular";
}

export class ComponentBaseProperties {
    componentClasses?: string[] | string;
    text?: string;
    textSize?: TextSize;
    textColor?: TextColor;
    fontFamily?: FontFamily;
    draggable?: boolean;
}

export class ComponentBaseState {
}

export class ComponentBase<ComponentBaseProperties, ComponentBaseState> extends React.Component<ComponentBaseProperties, ComponentBaseState, any> {

    constructor(properties: ComponentBaseProperties, state?: ComponentBaseState) {
        super(properties, state);
    }

    focusRef: {
        focus: () => void;
    } | undefined;

    protected defaultProperties = function (): any {
        return new DefaultTextProperties();
    }
}

export class ComponentAnimatedProperties extends ComponentBaseProperties {
    transitionName?: string;
    transitionEnterTimeout?: number;
    transitionLeaveTimeout?: number;
}

export class ActiveProperty{
    active:boolean
}