const str = `
010-1234-5678
thesecond@gmail.com
https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
table
http://localhost:1234/
동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
`


// 생성자 함수 형식

// const regexp = new RegExp ('the','g')
// console.log(str.match(regexp))

// 리터럴 방식

// const regexp = /the/gi
// console.log(str.match(regexp))


// 문자열 대체 jump => HAPPY
const regexp = /jump/gi
console.log(regexp.test(str))

strResult = str.replace(regexp, 'HAPPY')
console.log(strResult)



console.log('------패턴 1------')
// 패턴 1
// t로 시작하는 문자열 찾기
// 주의 할 점 !! 문자열 앞에 공백이 있으면 실행 안됨
// g만 입력하면 null 값 출력, m을 추가해서, 대소문자 구별안하고 출력하고 싶으면 i
console.log(
    str.match(/^t/gim)
)

// d로 끝나는 문자열 찾기
console.log(
    str.match(/d$/gm)
)

// .임의의 한 문자와 일치
console.log(
    str.match(/./g)
)

// he로 끝나는 문자열 찾기
console.log(
    str.match(/.he/g)
)

// h로 시작하고 s로 끝나는 문자열 찾기
console.log(
    str.match(
        /h...s/g
    )
)

// fox와 dog를 |로 찾기
console.log(
    str.match(/fox | dog/g)
)

// http, https를 ?로 찾기
console.log(
    str.match(/https?/g)
)



console.log('------패턴 2------')
// 패턴 2
// d가 2개 연속 일치 여부

console.log(
    str.match(/d{2}/g)
)

// d가 2개 이상 4개 이하
console.log(
    str.match(/d{2,4}/g)
) 

console.log('------패턴 3------')
// 패턴 3

// FOX
console.log(
    str.match(/[fox]/g)
) 

// 0-9까지의 1개이상의 연속된 데이터 찾기
console.log(
    str.match(/[0-9]{1,}/g)
)

// 가에서 힣까지 2개이상 연속된 데이터 찾기
console.log(
    str.match(/[가-힣]{3,}/g)
)

console.log('------패턴 4------')
// 패턴 4

// 영어 대소문자, 숫자 , _까지 모든 문자 찾기
console.log(
    str.match(/\w/g)
)

// 경계를 모두 출력 : 공백, 특수문자
console.log(
    str.match(/\b/g)
)

// 경계활용해서 f로 시작 1개 이상의 문자 찾기
console.log(
    str.match(/bf\w{1,}\b/g)
)

// 모든 공백 찾기
console.log(
    str.match(/\s/g)
)

// 공백 활용
const h = `  the hello world        !`
console.log(
    h.replace(/\s/g, '')
)


console.log('------패턴 5------')
// 패턴 5
// 앞쪽 일치
console.log(
    str.match(/.{1,}(?=@)/g)
)

// 뒤쪽일치
console.log(
    str.match(/(?<=@).{1,}/g)
)