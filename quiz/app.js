const correctAnswers = ['B', 'B', 'B', 'B'];
const questionsForm = document.querySelector('.quiz-form');
const resultCotainer = document.querySelector('.result');

questionsForm.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  let questionsInputs = Array.from(questionsForm).filter(q => q.name.includes('q')).map(q => q.name);
  let questionsNames = questionsInputs.filter((x, i, a) => a.indexOf(x) == i);
  let userAnswers = questionsNames.map(q => questionsForm[q].value);

  userAnswers.forEach((ans, i) => {
    if (ans === correctAnswers[i]) {
      score += Math.round(100 / userAnswers.length);
    }
  });
  //score = Math.round(score / 100) * 100; ????

  scrollTo(0,0);

  //inject Result  
  resultCotainer.classList.remove('d-none');

  let output=0;
  const timer = setInterval(() => {
    resultCotainer.querySelector('div>p>span').innerText = `${output}%`;
    
    if (output == score) {
      clearInterval(timer);
    }

    output++;
  }, 10);
  
});