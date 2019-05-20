import { Component } from "react";
import { Button as MaterialButton, PropTypes } from "@material-ui/core";
import * as React from "react";

interface Props {
    onClick: () => void;
    className?: string;
    text: string;
    color?: PropTypes.Color;
    disabled?: boolean;
}

export class Button extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const props = this.props;

        return (
            <MaterialButton
                {...props}
                variant="contained"
                onClick={this.onClickHandler}>
                {props.text}
            </MaterialButton>
        );
    }

    private onClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
        this.props.onClick();
    }
}
