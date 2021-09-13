import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Login() {
  return (
    <>
      <div className='bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-6 sm:bg-red'>
          <div className='col-span-2'>
            <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
              <div className='max-w-md w-full space-y-8'>
                <div>
                  <span className='text-2xl font-bold text-gray-900'>
                    Welcome back
                  </span>
                  <h1 className='text-3xl font-bold'>Login to your account</h1>
                </div>
                <form className='mt-8 space-y-6' action='#' method='POST'>
                  <div>
                    <label
                      className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-first-name'
                    >
                      Email
                    </label>
                    <input
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 mb-6'
                      id='inline-full-name'
                      type='text'
                      placeholder='Enter Your Password'
                    />
                    <label
                      className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-first-name'
                    >
                      Password
                    </label>
                    <input
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 mb-8'
                      id='inline-full-name'
                      type='text'
                      placeholder='Enter Your Password'
                    />
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>
                      Sign in
                    </button>
                    Don't have an account yet ?
                    <Link href='/register'>
                      <a className='text-blue-700 font-bold'> Register</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-span-4 bg-auth-image'>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
