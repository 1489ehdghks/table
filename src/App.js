import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import DetailPage from './DetailPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from './List';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/view/:id/:id2" element={<DetailPage />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;