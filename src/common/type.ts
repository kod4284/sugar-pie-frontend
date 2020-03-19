export interface Test {
  test: String,
}

export interface State {
  counter: number
}

export interface CounterProps {
  number: number,
  onIncrease: () => Event | void,
  onDecrease: () => Event | void,
}

export interface CounterContainerProps {
  number: number,
  increaseConnect: () => void,
  decreaseConnect: () => void
}
