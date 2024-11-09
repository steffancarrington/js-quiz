import Image from 'next/image';

interface ResultsCardProps {
    questionCount: number;
    result: {
        score: number;
        correctAnswers: number;
        wrongAnswers: number;
    };
    setShowBonusQuestion: (value: boolean) => void;
    setShowResult: (value: boolean) => void;
}

const ResultsCard = ({ questionCount, result, setShowBonusQuestion, setShowResult }: ResultsCardProps) => {
  console.log('Question Count', questionCount);
  console.log('Result', result);

 return (
    <article className="flex items-center justify-center results-container">
        <section className="relative flex flex-col w-full max-w-[30rem] bg-white bg-clip-border text-gray-700 shadow-md lg:flex-row lg:max-w-[75rem]">
            <section className="relative m-0 w-full shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border text-gray-700 lg:w-3/6">
                <Image src="assets/images/js-8.webp" alt="image" width={100} height={100} quality={100} unoptimized className="h-full w-full object-cover" />
            </section>

            <section className="px-10 py-10 flex flex-col flex-grow justify-center text-center gap-5">
                <h2 className="mb-4 block text-4xl font-semibold font-heading leading-snug tracking-normal text-blue-gray-900 antialiased md:text-3xl">
                    Your Results
                </h2>

                <p className="mt-4 mb-4">Correct Answers: {result.correctAnswers}</p>

                <p className="mb-4">Incorrect Answers: {result.wrongAnswers}</p>

                <p>Score: <strong>{result.score}</strong> out of <strong>{questionCount}</strong></p>

                <button
                    className="flex select-none items-center self-center gap-2 rounded-lg mt-8 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-pink-500 border-pink-500 border-[1px] transition-all hover:text-pink-500 hover:bg-pink-500/5 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => {
                        setShowResult(false);
                        setShowBonusQuestion(true);

                    }}
                >
                        Bonus Question
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
    </article>       
 );
};

export default ResultsCard;