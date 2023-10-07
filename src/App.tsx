import { useState } from 'react'
import "./Styles/Main.sass"
import "./Styles/Reset.sass"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import SparesList from "./components/SparesList/SparesList";
import SparePage from "./components/SparePage/SparePage";
import {Spare} from "./Types.js";



function App() {
    const [selectedSpare, setSelectedSpare] = useState<Spare | null>(null)

    return (
        <div>
            <BrowserRouter>

                <div className="App">

                    <div className="wrapper">

                        <Header />

                        <Breadcrumbs selectedSpare={selectedSpare} setSelectedSpare={setSelectedSpare}/>

                        <Routes>

                            <Route path="/" element={<Navigate to="/spares" replace /> } />
                            <Route path="/spares/" element={<SparesList />} />
                            <Route path="/spares/:id" element={<SparePage selectedSpare={selectedSpare} setSelectedSpare={setSelectedSpare} />} />

                        </Routes>

                    </div>

                </div>

            </BrowserRouter>
        </div>
    )
}

export default App
