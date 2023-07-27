'use client';

import Button from '@/components/ui/Button';
import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn('github');
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <svg
                className="mr-2 h-5 w-5"
                width="20"
                height="20"
                role="img"
                version="1.1"
                viewBox="0 0 33 32"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="currentColor"
                >
                  <path d="M16.288,0 C7.294,0 0,7.293 0,16.29 C0,23.487 4.667,29.592 11.14,31.746 C11.955,31.896 12.252,31.393 12.252,30.961 C12.252,30.575 12.238,29.55 12.23,28.191 C7.699,29.175 6.743,26.007 6.743,26.007 C6.002,24.125 4.934,23.624 4.934,23.624 C3.455,22.614 5.046,22.634 5.046,22.634 C6.681,22.749 7.541,24.313 7.541,24.313 C8.994,26.802 11.354,26.083 12.282,25.666 C12.43,24.614 12.851,23.896 13.316,23.489 C9.699,23.078 5.896,21.68 5.896,15.438 C5.896,13.66 6.531,12.205 7.573,11.067 C7.405,10.655 6.846,8.998 7.733,6.756 C7.733,6.756 9.1,6.318 12.212,8.426 C13.511,8.064 14.905,7.884 16.29,7.877 C17.674,7.884 19.067,8.064 20.368,8.426 C23.478,6.318 24.843,6.756 24.843,6.756 C25.732,8.998 25.173,10.655 25.006,11.067 C26.05,12.205 26.68,13.66 26.68,15.438 C26.68,21.696 22.871,23.073 19.243,23.476 C19.827,23.979 20.348,24.973 20.348,26.493 C20.348,28.67 20.328,30.427 20.328,30.961 C20.328,31.397 20.622,31.904 21.448,31.745 C27.916,29.586 32.579,23.485 32.579,16.29 C32.579,7.293 25.285,0 16.288,0"></path>
                </g>
              </svg>
            )}
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
