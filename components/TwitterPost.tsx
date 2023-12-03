"use client"
import { useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
import axios from 'axios';

const TwitterPost = () => {
    const { data: session } = useSession();

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePost = useCallback(async () => {
        if (session) {
            setLoading(true);
            try {
                const url = `/api/x/post`;
                const response = await axios.post(url, { text }, {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        "Content-Type": 'application/json'
                    }
                });

                if (response.data && response.data.id) {
                    window.alert(`You have created a post here: https://x.com/${session.user?.name}/status/${response.data.id}`)
                }

            } catch (e) {
                window.alert(`Post failed`);
            }

            setLoading(false);
        }
    }, [session, text]);

    if (!session) return <></>

    return (
        <div>
            <div>
                <textarea className="w-96 p-2 border border-gray-300 rounded text-black" value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <button className="px-4 py-2 rounded border border-1" onClick={handlePost} disabled={loading}>{loading ? "Loading..." : "Post"}</button>
            </div>
        </div>
    );
};

export default TwitterPost;