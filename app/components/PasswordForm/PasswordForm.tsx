import Image from 'next/image';

interface PasswordFormProps {
    question?: string;
    answer?: string;
}

const PasswordForm = ({ question, answer }: PasswordFormProps) => {
    console.log('Question', question);
    console.log('Answer', answer)

    return (
        <article className="flex items-center justify-center">
        <section className="relative flex flex-col w-full max-w-[30rem] min-h-[596px] bg-white bg-clip-border text-gray-700 shadow-md lg:flex-row lg:max-w-[60rem]">
          <section className="relative m-0 w-full shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border text-gray-700 lg:w-2/5">
            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="image" width={100} height={100} quality={100} unoptimized className="h-full w-full object-cover" />
          </section>

          <section className="p-20 text-center flex flex-col justify-center">
            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal text-pink-500 antialiased">
                Hello,
            </p>
            <h2 className="mb-4 block text-2xl font-semibold font-heading leading-snug tracking-normal text-blue-gray-900 antialiased">
             Welcome to the JavaScript Quiz for beginners
            </h2>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Please enter the password you have been given to continue...
            </p>

          
           

            <section className="flex flex-col justify-center mt-12">
                <input type="text" className="w-[350px] p-3 mb-4  bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Enter password" />
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 w-[350px] text-center align-middle font-sans text-xs font-bold uppercase text-white bg-pink-500 border-pink-500 border-[1px] transition-all hover:text-pink-500 hover:bg-pink-500/5 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Continue to the Quiz
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                      >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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

export default PasswordForm;
