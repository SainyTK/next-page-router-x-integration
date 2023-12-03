"use client"
// Example in a component file
import { signIn, signOut, useSession } from 'next-auth/react';

const TwitterLogin = () => {
    const { data: session } = useSession();

    const username = session?.user?.name || "";
    const image = session?.user?.image || "";

    return (
        <div>
            {!session ? (
                <button onClick={() => signIn('twitter')}>Sign in with Twitter</button>
            ) : (
                <div>
                    <div className="flex space-x-2 items-center mb-4">
                        <p>Signed in as </p>
                        <img className='w-10 h-10 rounded-full' src={image} alt='x-image-profile' />
                        <p>{username}</p>
                        <div className='flex justify-center'>
                            <button className='border border-white p-2 rounded' onClick={() => signOut()}>Sign out</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default TwitterLogin;