import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dogs />} />
        <Route path="/:id" element={<Dog />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default App;
