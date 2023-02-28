'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center">
      <h4 className='text-red-700 text-4xl'>Woops! Something is not okay..</h4>
     
    </div>
  );
}
