import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Contact from "../../pages/Contact/Contact"
import Enterprise from "../../pages/Enterprise/Enterprise"
import Projects from "../../pages/Projects/Projects"
import NewProject from "../../pages/NewProject/NewProjectInput/NewProject"
import EditProject from "../../pages/EditProject/EditProject"
import Thanks from "../../pages/Thanks/Thanks"

import Container from "../Container/Container"


const Rotas = () => {
    return (
        <Container customClass="min-height">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/newproject" element={<NewProject/>}/>
                <Route path="/project/:id" element={<EditProject/>}/>
                <Route path="/thanks" element={<Thanks/>}/>
            </Routes>
        </Container>
    );
}

export default Rotas;