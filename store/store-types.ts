import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    UserState,
    unknown,
    Action<string>
>;

export type RootActionTypes =
    | RegisterAction
    | LoginAction
    | LogoutAction
    | FetchRemindersAction;

export enum UserActionType {
    Register = "REGISTER",
    Login = "LOGIN",
    Logout = "LOGOUT",
    FetchReminders = "FETCH_REMINDERS",
}

export interface UserState {
    user: User;
    reminders: Reminder[];
}

interface RegisterAction {
    type: typeof UserActionType.Register;
    payload: User;
}

interface LoginAction {
    type: typeof UserActionType.Login;
    payload: User;
}

interface LogoutAction {
    type: typeof UserActionType.Logout;
}

interface FetchRemindersAction {
    type: typeof UserActionType.FetchReminders;
    payload: Reminder[] | [];
}

export interface User {
    id: string | null;
    email: string | null;
    token: string | null;
}

export interface Reminder {
    id: string;
    pill_id: string;
    time: number;
    frequency: number;
    notes: string[];
}
