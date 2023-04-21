 import React from 'react'
// import UsersReducer, {followAC, unfollowAC} from "../usersReducer";
//
// test('should change isFollow to true', () =>{
//
//     const initial = [
//         {
//             id: 1,
//             data: {firstName: 'Kolya', lastName: 'Ivanov', photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'},
//             place: {country: 'Belarus', city: 'Minsk'},
//             status: 'Here i am',
//             isFollow: false
//         }
//         ]
//
//     const result = UsersReducer(initial, followAC(1))
//     expect(result[0].isFollow).toBe(true)
//     expect(initial).not.toBe(result)
// })
// test('should change isFollow to false', () =>{
//
//     const initial = [
//         {
//             id: 1,
//             data: {firstName: 'Kolya', lastName: 'Ivanov', photo: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600107/59070188-user-icon-mann-profil-gesch%C3%A4ftsmann-avatar-person-symbol-in-vektor-illustration.jpg'},
//             place: {country: 'Belarus', city: 'Minsk'},
//             status: 'Here i am',
//             isFollow: true
//         }
//     ]
//
//     const result = UsersReducer(initial, unfollowAC(1))
//     expect(result[0].isFollow).toBe(false)
//     expect(initial).not.toBe(result)
// })