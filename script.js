let counter = 0;
let box = document.getElementById('info');
let button = document.getElementById('button')

let qstn1 = {
  question: 'Земля самая близкая планета к Солнцу?',
  correctAnswer: 'Нет'
}

let qstn2 = {
  question: '2 + 2 = 22?',
  correctAnswer: 'Нет'
}

let qstn3 = {
  question: 'Помидор это фрукт?',
  correctAnswer: 'Нет'
}

let qstn4 = {
  question: 'В году 12 месяцев?',
  correctAnswer: 'да'
}


let qstns = [qstn1, qstn2, qstn3, qstn4];

function results() {
  qstns.forEach(function(item) {
    let getAns = prompt(item.question)
	  if (item.correctAnswer.toLowerCase() === getAns.toLowerCase()) {
      console.log(`Congratulation! Your answer is correct: ${item.correctAnswer}`);
      counter++;
      box.innerHTML = `Correct answers: ${counter}`;
    } else if (item.correctAnswer != item.answer) {
  	  console.log(`Sorry, but your answer is incorrect! The correct answer is: ${item.correctAnswer}`);
    }
  })
}

button.addEventListener('click', () => results())