// 반복문 : for, while

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

for (let i = 1; i < 20; i += 2) {
  console.log(10 / i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
  console.log(sum);
}

console.log(sum);

// while 구문에 condition 결과가 true로 고정되면 무한반복
let a = 0;
while (true) {
  a++;

  if (a >= 10) {
    break;
  }
}

console.log(a);

// 로그인 간단한 시나리오(while 구문을 사용하는 경우)
// 로그인을 할 때 서버에서는 계속 입력을 기다려야 함
// 사용자가 아이디, 비번을 입력
// 입력된 아이디와 비번이 잘못되었을 때 오류메시지를 생성
// 다시 입력을 기다려야 함
// 사용자가 올바른 아이디와 비번을 입력할 때까지 반복적으로 오류메시지 발생과 입력 대기 실행

let id = "devilbb1";
let pw = "tmdqja";
let loginCnt = 0;

function login() {
  while (true) {
    if (id === "devilbb" && pw === "tmdqja") {
      console.log("로그인 성공");
      loginCnt = 0;
      break;
    } else {
      loginCnt++;
      console.log("로그인 아이디/비번을 " + loginCnt + " 번 틀리셨습니다.");
      if (loginCnt === 5) {
        console.log("5회 틀렸습니다.");
        break;
      }
    }
  }
}

login();
