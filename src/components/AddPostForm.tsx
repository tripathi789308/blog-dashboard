'use client'; // Required for state and hooks

import React, { useState } from 'react';
import type { NewBlogPost } from '@/types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useAddPostMutation } from '@/lib/redux/slices/blogApis';

interface AddPostFormProps {
    onPostAdded?: () => void; 
}

export default function AddPostForm({ onPostAdded }: AddPostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const [addPost, { isLoading, error: mutationError, isSuccess }] = useAddPostMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!title.trim() || !body.trim()) {
      setFormError('Title and Body cannot be empty.');
      return;
    }

    const newPost: NewBlogPost = { title, body, userId: 1 };

    try {
        await addPost(newPost).unwrap();
        setTitle('');
        setBody('');
        if (onPostAdded) {
            onPostAdded();
        }
    } catch (err) {
        console.error('Failed to save the post: ', err);
        setFormError("Failed to add post. Check console for details.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {isSuccess && <Alert severity="success" sx={{ mb: 2 }}>Post added successfully!</Alert>}
      {formError && <Alert severity="error" sx={{ mb: 2 }}>{formError}</Alert>}
      {mutationError && (
         <Alert severity="error" sx={{ mb: 2 }}>
            Error submitting post: {'status' in mutationError ? `Error ${mutationError.status}: ${JSON.stringify(mutationError.data)}` : 'An unknown error occurred'}
        </Alert>
      )}

      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Post Title"
        name="title"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!formError && !title.trim()}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="body"
        label="Post Body"
        id="body"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        error={!!formError && !body.trim()}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Add Post'}
      </Button>
    </Box>
  );
}