export interface Action {
  type: string;
  payload: any;
}

export interface ContainerState {
  container: String;
  message?: String;
}
