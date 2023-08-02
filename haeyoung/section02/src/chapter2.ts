//배열
let numArr: number[] = [1,2,3];
let strArr: string[] = ["hello","hey","ki"];
let boolArr: Array<boolean> = [true,false,true];
//<boolean> 꺽새로 타입 지정해주는걸 제네릭 문법

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1,"hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [
    [1,2,3],
    [4,5]
]

//튜플 - 타스에서만 존재
//길이와 타입이 고정된 배열
let tup1: [number,number] = [1,2];
// tup1 = [1,2,3];
// tup1 = ["1","2"];
// 에러

let tup2: [number,string,boolean] = [1,"2",true];

tup1.push();
tup1.pop();
//***주의
//배열 메소드 사용시 튜플의 길이제한이 발동 X 자바스크립트의 배열이라 생각하기 때문에 알아보지 못함

const users:[string,number][] = [
    ["이정환",1],
    ["임해영",2],
    ["한혜영",3],
    ["오세원",4],
    // [5,"타스스"],
    //튜플은 인덱스의 위치에 따라 값이 정해져있고 순서를 지키는게 중요할때 튜플을 이용해 값을 잘못넣는걸 방지
]