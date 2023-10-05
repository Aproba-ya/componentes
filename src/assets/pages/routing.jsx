import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const routing = () => {
  return (
    <BrowserRouter>
    <nav>
        <Link to='/'>Auxiliares</Link>
        <Link to="/Marketplace">Marketplace</Link>
        <Link to="/Ucount">Tu cuenta</Link>
        <Link to="/About">Acerca</Link>
        <Link to="/Politics">Politicas de Uso</Link>
        <Link to="/Error"></Link>
        <Link to="/Soon"></Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}>
            <Route path="/About" element={<About />}/>
            <Route path="/Ucount" element={<Ucount />}/>
            <Route path="/Politics" element={<Politics />}/>
            <Route path="/Error" element={<Error />}/>
        </Route>
        <Route path="/Marketplace" element={<Marketplace />}>
            <Route path="/Soon" element={<Soon/>}/>
        </Route>
    </Routes>
</BrowserRouter>
  )
}

export default routing