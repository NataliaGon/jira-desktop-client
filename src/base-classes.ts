import * as React from "react";

export class ComponentBaseProperties {
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
}
