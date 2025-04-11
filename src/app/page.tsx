'use client'; // Required to use RTK Query hooks

import React from 'react';
import BlogCard from '@/components/BlogCard';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPostsQuery } from '@/lib/redux/slices/blogApis';

export default function HomePage() {
  // Use the hook to fetch posts
  const { data: posts, error, isLoading, isFetching } = useGetPostsQuery();

  if (isLoading || isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
     const errorMessage = 'status' in error ? `Error ${error.status}: ${JSON.stringify(error.data)}` : 'Failed to fetch posts';
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!posts || posts.length === 0) {
    return <Typography>No posts found.</Typography>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} size={6}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}