import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { BlogPost } from '@/types';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  post: BlogPost;
}

const createExcerpt = (text: string, maxLength: number = 80) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter()
  const excerpt = createExcerpt(post.body);

  return (
    <Card
      sx={{
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
          cursor : "pointer"
        },
      }}
      onClick={()=> {
        router.push(`/post/${post.id}`)
      }}
    >
      <CardContent sx={{ overflow: 'hidden' }}>
        <Typography gutterBottom variant="h6" component="div" 
            sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',
                minHeight: '3em'
            }}
        >
          {post.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, display: 'block' }}>
          User ID: {post.userId}
        </Typography>
        <Typography variant="body2"
             sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                textOverflow: 'ellipsis'
             }}
        >
          {excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
}