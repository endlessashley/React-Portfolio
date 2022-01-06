import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavTabs from './NavTabs';
// import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Contact from './pages/Contact';

export default function Container() {
    return (

        <div className="stars">
            <div className="twinkling">
                <Router>
                    <div className="container-fluid">
                        <Header />
                        <NavTabs />
                        <Switch>
                            <Route exact path="/">
                                <About />
                            </Route>
                            <Route exact path="/home">
                                <About />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/portfolio">
                                <Portfolio />
                            </Route>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                            <Route exact path="/resume">
                                <Resume />
                            </Route>
                        </Switch>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </Router>
            </div>
        </div>
    );
}






//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     // if (currentpage === 'Resume') {
//     //     return <Resume />;
//     // }
//     return <Contact />


//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   );
//   }
