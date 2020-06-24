export interface ICurrentUser {
  uid: string,
  email: string,
  emailVerified: boolean,
  displayName: string
}

export interface IMainState {
  currentUser?: ICurrentUser;
}