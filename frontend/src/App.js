import './App.css';
import {Button, Center, Flex} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Home from './components/home/Home.js';
import Profile from './components/profile/Profile.js';
import TurfDetails from "./components/turf/TurfDetails";
import BasicMap from "./components/turf/Map.js";

import { useSelector } from 'react-redux';
import Lab from "./Lab.js";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venues" element={<div>Venues page</div>} />
                    <Route path="/events" element={<div>Events page</div>} />
                    <Route path="/accessories" element={<div>Accessories page</div>} />
                    <Route path="/profile" element={<PrivateRoute component={Profile} />} />
                    <Route path="/turfDetails" element={<PrivateRoute component={TurfDetails} />}/>
                    <Route path="/showOnMap" element={<PrivateRoute component={BasicMap} />}/>
                </Routes>
            </BrowserRouter>
            {/* <Lab/>  */}
        </>
    );
};

function PrivateRoute({ component: Component }) {
    const userDetails = useSelector(state => state.user);
    const token = userDetails.token;
    const navigate = useNavigate();
    return (
        token ? (
            <Component />
        ) : (
            <>
                <h1>Invalid URL.Try logging in.</h1>
                <Flex
                    height="100vh"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Center>
                        <Button colorScheme="teal" mr={2} onClick={() => navigate("/")}>
                            Return to Home page
                        </Button>
                    </Center>
                </Flex>
            </>
        )
    );
};

export default App;
