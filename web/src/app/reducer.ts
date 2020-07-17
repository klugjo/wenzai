import { IMainState } from '../typings';
import initialState from '../utils/initialState';
import authReducer from './Authentication/authReducer';
import rootReducer from './Root/rootReducer';

type IReducerFunction = (state: IMainState, action: any) => IMainState;

export default function(state: IMainState = initialState, action: any): IMainState {
  const reducers: Array<IReducerFunction> = [
    authReducer,
    rootReducer
  ];

  return reducers.reduce(
    (prevState: IMainState, reducer: IReducerFunction) => reducer(prevState, action),
    state
  );
};
