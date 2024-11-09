import Image from 'next/image';
import { useState } from 'react';

import Confetti from 'react-confetti';

const BonusQuestionCard = () => {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const confettiStyles: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    };

    const triggerConfetti = () => {
        setConfettiActive(true);
        setFadeOut(false);

        setTimeout(() => {
            setFadeOut(true);
        }, 4500);
    
        setTimeout(() => {
            setConfettiActive(false);
        }, 5000); 
      };
  
    return (
        <>
            {isConfettiActive && (
                <Confetti
                style={confettiStyles}
                className={fadeOut ? 'fade-out' : ''}
                numberOfPieces={500}
                gravity={0.15}
                initialVelocityY={15}  
                recycle={true}
                friction={0.99}
                run={isConfettiActive}
              />
            )}

            <article className="flex items-center justify-center results-container">
                <section className="relative flex flex-col w-full max-w-[30rem] bg-white bg-clip-border text-gray-700 shadow-md lg:flex-row lg:max-w-[75rem]">
                <section className="relative m-0 w-full shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border text-gray-700 lg:w-3/6">
                    <Image src="assets/images/pokemon.webp" alt="image" width={100} height={100} quality={100} unoptimized className="h-full w-full object-cover" />
                </section>

                <section className="px-10 py-10 flex flex-col flex-grow justify-center text-center gap-5">
                    <h2 className="mb-4 block text-3xl font-semibold font-heading tracking-normal text-blue-gray-900 antialiased md:text-4xl">
                    <span className="block mb-2">Becky,</span>
                    Will you marry me?
                    </h2>
                    <h3 className="mt-6 font-heading text-2xl leading-snug tracking-normal text-blue-gray-900">Love Tom x</h3>

                <button
                    className="flex select-none items-center self-center gap-2 rounded-lg mt-8 py-4 px-8 text-center align-middle font-sans text-xs font-bold uppercase border-pink-500 border-[1px] transition-all  hover:bg-pink-500/5 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={triggerConfetti}
                    >
                    Yes   &#x1F389;
                    </button>
                </section>
                </section>
            </article>
        </>
  );
};

export default BonusQuestionCard;
