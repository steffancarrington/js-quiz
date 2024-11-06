import Image from 'next/image';

interface ResultsCardProps {
    questionCount: number;
    result: {
        score: number;
        correctAnswers: number;
        wrongAnswers: number;
    };
}

const BonusQuestionCard = () => {
    return (
        <article className="flex items-center justify-center results-container">
            <section className="relative flex flex-col w-full max-w-[30rem] bg-white bg-clip-border text-gray-700 shadow-md lg:flex-row lg:max-w-[75rem]">
                <section className="relative m-0 w-full shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border text-gray-700 lg:w-3/6">
                <Image src="assets/images/pokemon.webp" alt="image" width={100} height={100} quality={100} unoptimized className="h-full w-full object-cover" />
                </section>

                <section className="px-10 py-10 flex flex-col flex-grow justify-center text-center gap-5">
                    <h2 className="mb-4 block text-4xl font-semibold font-heading leading-snug tracking-normal text-blue-gray-900 antialiased md:text-3xl">
                    Becky,<br />
                    Will you marry me?
                    </h2>
                </section>
            </section>
        </article>       
    );
};


export default BonusQuestionCard;