

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex flex-row justify-between items-center w-full mb-10 pt-3'>
      <span className='orange_gradient 
        font-satoshi font-extrabold text-4xl

      '>SumzAi</span>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/tejasp2003", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>SumzAi</span>
      </h1>
      <h2 className='desc'>
        Reading whole are articles are too boring? <br className='max-md:hidden' />
        SumzAi is here to help you out!

      </h2>

    </header>
  );
};

export default Hero;