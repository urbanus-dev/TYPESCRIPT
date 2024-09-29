"use strict";
// const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => { };
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// acceptsObj({
//     bar: 123,
//     baz: true,
//     foo: 'hello',
// });
// // const a=null;
// // a.toString();
// type Songs = {
//     title: string;
//     artist: string;
//     duration: number;
// };
// const song1: Songs = {
//     title: 'Wonderful Wonderful',
//     artist: 'The Killers',
//     duration: 330000,
// };
// const logUserJobTitle = (user: {
//     job: {
//         title: string;
//     };
// }) => {
//     console.log(user.job.title);
// };
// var exampleUser = {
//     job: {
//         title: "123",
//     },
// };
// logUserJobTitle(exampleUser);
// var things1 = 456; // Type number
// const funct: Function = () => {
//     const randomTimes100 = Math.random() * 100;
//     const randomPercentage = `${randomTimes100.toFixed(2)}%`;
//     console.log(randomPercentage);
// };
// funct();
// const logAlbumInfo = (
//     title: string,
//     trackCount: number,
//     isReleased: boolean,
// ) => {
//     logAlbumInfo("love", 34, true)
// };
// // Variable Annotations
// var name2: string = "urbanus"
// let name3: string = "wambua"
// const dob: number = 1999
// let isReleased: boolean = true;
// //basic types
// let example1: string = "Hello World!";
// let example2: number = 42;
// let example3: boolean = true;
// let example4: symbol = Symbol();
// let example6: null = null;
// let example7: undefined = undefined;
// let albumTitle = "Midnights";
// // let isReleased = true;
// let trackCount = 13;
// // function add(a:any, b:any) {
// //       return a + b;
// //     }
// function concatName(first: string, last?: string) {
//     concatName("joel".concat(" michael"))
// }
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const result = (0, exports.add)(1, 2);
