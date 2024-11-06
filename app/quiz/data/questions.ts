// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 7,
  perQuestionScore: 1,
  questions: [
    {
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      answers: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
      image: 'assets/images/js-1.webp',
    },
    {
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      answers: ['var', 'let', 'var and let', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'var and let',
      image: 'assets/images/js-2.webp',
    },
    {
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
      answers: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
      image: 'assets/images/js-3.webp',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      answers: ['const', 'var', 'let', 'constant'],
      type: 'MCQs',
      correctAnswer: 'const',
      image: 'assets/images/js-4.webp',
    },
    {
        question: 'What does the "typeof" operator in JavaScript do?',
        answers: [
            'Returns the type of a variable or expression',
            'Compares two values',
            'Declares a new variable',
            'Creates a new object'
        ],
        type: 'MCQs',
        correctAnswer: 'Returns the type of a variable or expression',
        image: 'assets/images/js-5.webp',
    },
    {
        question: 'What is the result of the expression 5 + "5" in JavaScript?',
        answers: ['10', '55', '5 + "5"', 'Error'],
        type: 'MCQs',
        correctAnswer: '55',
        image: 'assets/images/js-6.webp',
    },
    {
        question: 'Which of the following is NOT a JavaScript data type?',
        answers: ['Number', 'String', 'Boolean', 'Character'],
        type: 'MCQs',
        correctAnswer: 'Character',
        image: 'assets/images/js-7.webp',
    }
  ],
}