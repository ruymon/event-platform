import { Route, Routes } from "react-router-dom";

import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login page - TODO</h1>}/>
      <Route path="/event" element={<Event />}>
        <Route path="lesson/:slug" element={<Event />}/>
      </Route>
      
      <Route path="*" element={<h1>404</h1>}/>
    </Routes>
  )
}