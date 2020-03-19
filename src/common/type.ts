export interface Test {
  test: String,
}

export interface CounterProps {
  number: number,
  onIncrease: () => Event,
  onDecrease: () => Event
}