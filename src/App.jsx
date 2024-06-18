import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HomePage, MovieDetailPage, MoviesPage, PostPage } from "./pages";
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
        path: PAGE_URL.POST,
        element: <PostPage />,
      },
      {
        path: `${PAGE_URL.MOVIE_DETAIL}/:id`,
        element: <MovieDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
