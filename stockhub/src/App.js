import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StockData } from './components/StockContext';
import { CompanyProvider } from './components/pages/companies/GetCompanies';
import Home from './components/pages/HomePage/Home';
import NavBar from './components/ui/NavBar';
import Stocks from './components/Stocks';
import CompanyFinder from './components/pages/companies/Companies';
import Footer from './components/pages/Footer/Footer';
import DetailsPage from './components/pages/companies/DetailsPage';
import Profile from './components/pages/ProfilePage/Profile';
import ListNews from './components/pages/MarketNews/ListNews';
import { NewsCollection } from './components/pages/MarketNews/NewsContext';
import NewsDetailed from './components/pages/MarketNews/NewsDetailed';

function App() {
  const [companyName, setCompanyName] = useState('');
  const changeCompanyName = (name) => {
    setCompanyName(name);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <CompanyProvider>
            <Route
              path='/companies'
              render={(props) => (
                <CompanyFinder changeCompanyName={changeCompanyName} />
              )}
            ></Route>
			 <StockData>
          <Route path='/stocks' component={Stocks}></Route>
        </StockData>
          </CompanyProvider>
          <Route path='/' exact></Route>
          <Route path='/companies' exact></Route>
          <Route path='/market-news' exact></Route>
        </Switch>

        <Route path='/profile' component={Profile} exact></Route>

       
        <Route path='/' exact component={Home}></Route>
        <Route
          path='/details/:symbol'
          render={(props) => <DetailsPage {...props} name={companyName} />}
        />
        <NewsCollection>
          <Route exact path='/market-news' component={ListNews} />
          <Route exact path='/market-news/:newsId' component={NewsDetailed} />
        </NewsCollection>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
