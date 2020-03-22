export interface Test {
  test: String,
}

export interface State extends Sample, Loading {
  counter: number
}
export interface Sample {
  sample: {
    loading:{
      GET_POST: boolean,
      GET_USERS: boolean,
    },
    post: Post,
    users: Array<Users>,
  }
}

export interface Loading {
  loading: {
    type: string,
  }
}

export interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
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
