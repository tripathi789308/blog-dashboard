'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h5" gutterBottom>Something went wrong!</Typography>
      <Alert severity="error" sx={{ mb: 2, justifyContent: 'center'}}>
         {error.message || "An unexpected error occurred."}
      </Alert>
      <Button
        variant="contained"
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  )
}