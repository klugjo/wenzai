import { IMainState } from '../typings';
import initialState from '../utils/initialState';

type IReducerFunction = (state: IMainState, action: any) => IMainState;

export default function(state: IMainState = initialState, action: any): IMainState {
  const reducers: Array<IReducerFunction> = [

  ];

  return reducers.reduce(
    (prevState: IMainState, reducer: IReducerFunction) => reducer(prevState, action),
    state
  );
};
