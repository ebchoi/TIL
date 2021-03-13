//제어문 연습 문제
//https://poiemaweb.com/fastcampus-exercise/exercise-control-flow


// #1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
console.log('Question 1:');

var x = 15;

if (x > 10 && x < 20) {
    console.log(x);
}

// #2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
console.log('Question 2:');
for (var i = 0; i < 10; i++){
    if (i%2 == 0) {
    console.log(i);
    }
}

// #3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
console.log('Question 3:');

evenNum = "";

for (var i = 0; i < 10; i++){
    if (i%2 == 0){
        evenNum += i;
    }
}

console.log(evenNum);

// #4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
console.log('Question 4:');

for (var i = 10; i > 0; i--){
    if (i%2 != 0){
        console.log(i);
    }
}

// #5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
console.log('Question 5:');

var num = 0;

while (num < 10){
    if (num%2 == 0){
        console.log(num);
    }
    num++;
}

// #6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
console.log('Question 6:');

var num = 10;

while (num > 0){
    if (num%2 != 0){
        console.log(num);
    }
    num--;
}

// #7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
console.log('Question 7:');

var sum = 0;

for (var i = 0; i < 10; i++){
    sum += i;
}

console.log(sum);

// #8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
console.log('Questions 8:');

var sum = 0;

for (var i = 1; i < 20; i++){
    if (i%2 != 0 && i%3 !=0){
        sum += i;
    }
}

console.log(sum);

// #9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
console.log('Questions 9:');

var sum = 0;

for (var i = 1; i < 20; i++){
    if (i%2 == 0 || i%3 ==0){
        sum += i;
    }
}

console.log(sum);

// #10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
console.log('Questions 10:');

for (var i = 1; i <= 6; i++){
    for (var j = 6; j >= 1; j--){
        if (i + j == 6){
            console.log([i,j])
        }
    }
}