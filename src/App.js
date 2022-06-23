import {Router, Routes, Route} from ''
import { ListPage } from "./page/ListPage";
import {DetailPage} from "./page/DetailPage";
import { Menu } from "./component/menu";


function App() {
  return (
    <div className="App">
      <Menu/>
        <Router>
          <Routes>
            <Route elememt={<ListPage/>} path="/" />
            <Route element={<DetailPage/>} path="/api" />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
