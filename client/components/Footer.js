function Footer() {
  return (
    <div className='bg-gray-100 mt-10'>
      <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24'>
        <figure className='md:flex bg-gray-100 rounded-xl p-8 md:p-0'>
          <img
            className='w-32 h-32 md:w-48 md:h-48 md:rounded-none rounded-full mx-auto'
            src='assets/images/profile.png'
            alt=''
            width='384'
            height='512'
          />
          <div className='pt-6 md:p-8 text-center md:text-left space-y-4 md:border-r-2'>
            <div className='text-cyan-600 text-lg font-semibold'>About Me</div>
            <figcaption className='font-medium'>
              <div className='text-cyan-600'>Nasution</div>
              <div className='text-gray-500'>React JS Developer</div>
              <div className='text-gray-500'>nasutioncode@gmail.com</div>
            </figcaption>
          </div>
          <div className='space-y-4 pt-6'>
            <blockquote>
              <p className='text-lg font-semibold ml-8'>
                “I have been in MERN-stack for almost three years with
                some library users such as material-ui and tailwindcss.”
              </p>
            </blockquote>
            <img
              className='w-auto h-auto md:w-78 md:h-48 mx-auto'
              src='https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png'
              alt=''
              width='384'
              height='512'
            />
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Footer;
