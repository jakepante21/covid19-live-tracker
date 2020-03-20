import React from 'react';
import Navbar from "./components/layouts/Navbar.js";
import Header from "./components/body/Header.js";
import Section from "./components/body/Section.js";
import Footer from "./components/layouts/Footer.js";

function App() {
    return (
        <React.Fragment>
        	<div className="page-container">
        		<Navbar/>
        		<div className="main-cont">
	        		
		            <Header/>
		            <Section/>
		        </div>
		        <Footer/>
        	</div>
        </React.Fragment>
    );
}

export default App;
