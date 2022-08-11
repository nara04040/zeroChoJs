let notice = document.getElementById('notice');
let result = document.getElementById('result');
let form = document.getElementById('form');
let input = document.getElementById('input');

// 주억진 숫자 1 ~ 9까지
const numbers = [];
for (let i = 0; i < 9; i++) {
    numbers.push(i + 1);
}

// 정답칸에 들어갈 숫자들 (4자리)
const answer = [];
for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers.index);
    numbers.splice(index, 1);
}

// 유저가 시도한 숫자들
const tryNum = [];
// 유저는 4자리 이하의 숫자, 중복되지않는 숫자, 이미 시도한숫자는 안됨, 을 해야한다.
// 적용된 문법 : 1. Set().size,  2. .includes() 
function checkInput(input) {
    // 4자리 이하
    if (input.length !== 4) {
        return alert('숫자를 4자리로 맞춰주세요!');
    }
    // 숫자 중복 피해야함
    if (new Set(input).size !== 4) {
        return alert('중복되지않게 입력해주세요!');
    }
    if (tryNum.includes(input)) {
        return alert('이미 시도했습니다');
    }
    return true;
}

// 확인버튼을 눌렀을때 이벤트 처리
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    if (!checkInput(value)) {
        return;
    }

    if (answer.join('') === value) {
        result.textContent = "홈런!"
        return;
    }

    if (tryNum.length >= 9) {
        const message = document.createTextNode(`패배입니다, 정답은 ${answer.join('')}`);
        result.appendChild(message);
        return;
    }

    //볼, 스트라이크 확인
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) {
            if (index === i) {
                if (index === i) {
                    strike += 1;
                } else {
                    ball += 1;
                }
            }
        }
    }
    result.append(`${value} : ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'))
    tryNum.push(value)

});



