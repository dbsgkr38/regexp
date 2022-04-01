# 정규표현식 (RegExp)

정규식, regular expression

## 역할
- 문자검색 (Search)
- 문자대체 (Replace)
- 문자추출 (Extract)

## 테스트 사이트

https://regexr.com

### 정규식 표현식 작성방법
```js
//생성자 함수
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

### 예제 문자열
```js
const str = `
    010-1234-5678
    thesecond@gmail.com
    https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
    The quick brown fox jump over the lazy dog.
    abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | 정규식.test(문자열 ) | 일치 여부(Boolean)반환
match | 문자열.match(정규식) | 일치하는 문자의 배열
replace | 문자열.replace(정규식, 대문자) | 일치하는 문자를 대체

## 플래그 (옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 굳이 하지 않고 일치(ignore case)
m | 여러 줄 일치 (multi line)

## 패턴(표현)

패턴1 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치

패턴2 | 설명
--|--
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5이하 (3~5) 연속일치

패턴3 | 설명
--|--
[abc] | a또는 b또는 c
[a-z] | a부터 z사이의 문자 구간에 일치(영어소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어대문자)
[0-9] | 0부터 9사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치 (한글)

패턴4 | 설명
--|--
\w | 63개 문자 (word, 대소영문 52개 + 숫자 10개 + _)
\b | 63개 문자에 일치하지 않는(특수문자) 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치

패턴5 | 설명
--|--
(?=) | @를 기준으로 앞쪽 일치(Lookahead)
(?<=) | @를 기준으로 뒷쪽 일치(Lookbehind)