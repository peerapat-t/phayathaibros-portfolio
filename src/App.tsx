import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";
import { articlePages } from "./pages/article_page";
import { projectPages } from "./pages/app_page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        {Object.entries(projectPages).map(([slug, Page]) => (
          <Route key={slug} path={`projects/${slug}`} element={<Page />} />
        ))}
        <Route path="blog" element={<BlogPage />} />
        {Object.entries(articlePages).map(([slug, Page]) => (
          <Route key={slug} path={`blog/${slug}`} element={<Page />} />
        ))}
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
