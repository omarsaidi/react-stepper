import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  min: number,
  max: number,
  input: number;
  onValueChange: Function
}
interface State {
  current: number;
}
export class Stepper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      current: props.input,
    };
  }
  // change code below this line

  increment() {
    const newValue = this.state.current + 1;
    if (newValue <= this.props.max) {
      this.setState({
        current: newValue
      });
      this.props.onValueChange(newValue);
    }
  };

  decrement() {
    const newValue = this.state.current - 1;
    if (newValue >= this.props.min) {
      this.setState({
        current: newValue
      });
      this.props.onValueChange(newValue);
    }
  };


  // change code above this line
  render() {
    return (
      <div>
        <button className={[styles.stepper__button, styles.stepper__button_increase].join(" ")}
          disabled={this.state.current === this.props.min}
          onClick={() => this.decrement()}>-</button>
        <div className={styles.stepper__value}>{this.state.current}</div>
        <button className={[styles.stepper__button, styles.stepper__button_decrease].join(" ")}
          disabled={this.state.current === this.props.max} onClick={() => this.increment()}>+</button>
      </div>
    );
  }
};