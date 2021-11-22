import React, { SyntheticEvent } from 'react';
import './withHelper.css';

interface State {
  hovered: boolean;
}

export default function withHelper(Component: React.ElementType) { // Функция, создающая новый компонент на основе переданного (компонент-обёртку)
  return class ComponentWithHelper extends React.Component<any, State> { // Компонент-обёртка
    constructor(props: any) {
      super(props);
      this.state = { hovered: false };
      this.mouseOut = this.mouseOut.bind(this);
      this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver(e: SyntheticEvent) { // Новый функционал
      this.setState({ hovered: true });
      e.stopPropagation();
    }

    mouseOut(e: SyntheticEvent) {
      this.setState({ hovered: false });
      e.stopPropagation();
    }

    render() {
      return (
        <div
          className="component-with-helper"
          onMouseOut={this.mouseOut}
          onMouseOver={this.mouseOver}
        >
          { this.state.hovered && <div className="component-with-helper__helper">{this.props.id}</div>}
          
          <Component {...this.props} /> {}
        </div>
      );
    }
  };
}