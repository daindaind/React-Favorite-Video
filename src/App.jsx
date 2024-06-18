import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HomePage, MovieDetailPage, MoviesPage, PostsPage } from "./pages";
import { PAGE_URL } from "./constants/router";

const router = createBrowserRouter([
  {
    path: PAGE_URL.BASE,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PAGE_URL.MOVIES,
        element: <MoviesPage />,
      },
      {
        path: PAGE_URL.POSTS,
        element: <PostsPage />,
      },
      {
        path: PAGE_URL.MOVIES_DETAIL,
        element: <MovieDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
