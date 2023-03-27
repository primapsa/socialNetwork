import {ActionTypeExtended, UsersStateType} from "../types";

const initial = [
    {id: 1, username: 'Vasya'},
    {id: 2, username: 'Igor'},
    {id: 3, username: 'Lena'},
    {id: 4, username: 'Mashs'},
    {id: 5, username: 'Sveta'},
    {id: 6, username: 'VAlera'},
    {id: 7, username: 'Sergey'},
    {id: 8, username: 'VAdim'},
]
const usersReducer = (state : UsersStateType[] = initial, action: ActionTypeExtended): UsersStateType[] => {
  return state

}
export default usersReducer