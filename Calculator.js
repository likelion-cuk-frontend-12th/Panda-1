function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('올바른 숫자를 입력하세요.');
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert('0으로 나눌 수 없습니다.');
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            alert('올바른 연산자를 선택하세요.');
            return;
    }

    document.getElementById('display').value = result;
}
