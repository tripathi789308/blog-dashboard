# Blog Dashboard - Frontend Developer Test Project

This project is a simple blog dashboard built using Next.js, Material-UI (MUI), TypeScript, and Redux Toolkit Query (RTK Query). It allows users to view a list of blog posts fetched from a mock API (JSONPlaceholder), view post details, and add new posts.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **UI Library:** Material-UI (MUI)
*   **Language:** TypeScript
*   **State Management/API:** Redux Toolkit & RTK Query
*   **Mock API:** JSONPlaceholder

## Features

*   **List Posts:** Displays a list of blog posts on the homepage (`/`).
*   **View Post:** Displays the full details of a single post on a dynamic route (`/post/[id]`).
*   **Add Post:** Provides a form to add a new blog post (`/post/new`).
*   **Responsive Design:** Uses MUI's Grid system for basic responsiveness.
*   **Theming:** Basic MUI theme customization (colors).
*   **API Handling:** Uses RTK Query for data fetching, caching, loading, and error states. Automatic refetching of the post list after adding a new post via tag invalidation.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/tripathi789308/blog-dashboard.git
    cd blog-dashboard
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

```bash
npm run dev
```

#### Open http://localhost:3000 with your browser to see the result.
