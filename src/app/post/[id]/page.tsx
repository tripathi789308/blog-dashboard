'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useGetPostByIdQuery } from '@/lib/redux/slices/blogApis';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';
import theme from '@/styles/theme';

export default function PostDetailPage() {
  const params = useParams();
  const postIdParam = params?.id;
  const postId = typeof postIdParam === 'string' ? parseInt(postIdParam, 10) : undefined;

  const { data: post, error, isLoading, isFetching } = useGetPostByIdQuery(
      postId!,
      { skip: postId === undefined || isNaN(postId) }
  );

   if (!postId || isNaN(postId)) {
     return <Alert severity="warning">Invalid Post ID.</Alert>;
   }

  if (isLoading || isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
     const errorMessage = 'status' in error ? `Error ${error.status}: ${JSON.stringify(error.data)}` : 'Failed to fetch post';
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!post) {
    return <Alert severity="warning">Post not found.</Alert>;
  }

  return (
    <Paper sx={{ display : "flex", flexDirection : "column", gap : 4, p : 3,background : theme.palette.background.default}}>
      <Link href="/" passHref>
           <Button startIcon={<ArrowBack />} variant="outlined" component="a" sx={{ mt: 2}}>Back</Button>
       </Link>
       <Paper  sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        User ID: {post.userId}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {post.body}
      </Typography>
      </Paper>
    </Paper>
  );
}