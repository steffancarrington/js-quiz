import Image from 'next/image';


interface QuestionCardProps {
    questions: {
      question: string;
      answers: string[];
      type: string;
      correctAnswer: string;
      image: string;
    }[];
    questionNext: () => void;
    questionPrev: () => void;
    onAnswerSelected: (answer: string, index: number) => void;
    selectedAnswerIndex: number | null;
    activeQuestion: number;
    questionCount: number;
}

const QuestionCard = ({ questions, questionNext, questionPrev, onAnswerSelected, selectedAnswerIndex, activeQuestion, questionCount }: QuestionCardProps, index: number) => {


    console.log('Active Question', activeQuestion);

    const { question, answers } = questions[activeQuestion]

    const addLeadingZero = (number: number) => (number > 9 ? number : `0${number}`)

    return (
      <article key={index} className="flex items-center justify-center">
          <section className="relative flex flex-col w-full max-w-[30rem] bg-white bg-clip-border text-gray-700 shadow-md lg:flex-row lg:max-w-[75rem]">
              <section className="relative m-0 w-full shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border text-gray-700 lg:w-3/6">
                <Image src={questions[activeQuestion].image} alt="image" width={100} height={100} quality={100} unoptimized className="h-full w-full object-cover" />
              </section>

              <section className="px-10 py-10">
                  <section className="mb-8">
                    <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                    <span className="total-question">/{addLeadingZero(questionCount)}</span>
                  </section>

                  <h2 className="mb-4 block text-2xl font-semibold font-heading leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {question}
                  </h2>

                  <section id="answers" className="mb-12">
                    <ul>
                      {answers.map((answer, index) => (
                        <li
                          onClick={() => onAnswerSelected(answer, index)}
                          key={answer}
                          className={selectedAnswerIndex === index ? 'selected-answer' : undefined}>
                          {answer}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="flex justify-between">
                  <button
                  onClick={questionPrev} disabled={activeQuestion === 0}
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-pink-500 border-pink-500 border-[1px] transition-all hover:text-pink-500 hover:bg-pink-500/5 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4 rotate-180"
                          >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                      </svg>
                      Previous Question
                    </button>

                    <button
                    onClick={questionNext} disabled={selectedAnswerIndex === null}
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-pink-500 border-pink-500 border-[1px] transition-all hover:text-pink-500 hover:bg-pink-500/5 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                        {activeQuestion === questionCount - 1 ? 'Submit Quiz' : 'Next Question'}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                        </svg>
                    </button>
                  </section>

              </section>
          </section>
      </article>       
    );
};

export default QuestionCard;
