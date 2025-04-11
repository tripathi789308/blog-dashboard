'use client'; // Required for client-side interaction and potentially router usage

import React from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import AddPostForm from '@/components/AddPostForm';
import Paper from '@mui/material/Paper';

export default function AddNewPostPage() {
    const router = useRouter();

    const handlePostAdded = () => {
        console.log("Post added, navigating back home.");
        router.push('/');
    };

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Add New Blog Post
            </Typography>
            <AddPostForm onPostAdded={handlePostAdded} />
        </Paper>
    );
}