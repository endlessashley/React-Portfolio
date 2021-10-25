import React from 'react';   
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Contact from './pages/Contact';

export default function Container() {
return (
  <Router>
            <div class="container-fluid">
                <Header />
                <NavTabs />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path ="/home">
                      <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/resume">
                      <Resume />
                    </Route>
                </Switch>
                </div>
                <div className="footer">
                    <Footer />
                </div>
        </Router>
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
