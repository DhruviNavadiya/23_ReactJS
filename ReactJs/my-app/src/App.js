import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import ClassComp from './Component/ClassComp';
import CompInCom from './Component/CompInCom';
import ConstructComp from './Component/ConstructComp';
import LyfCycle from './Component/LyfCycle';
import PropsComp from './PropsComp';
import FunctionComp from './Component/FunctionComp';
import StatMng from './Component/StatMng';
import UseStat from './Hooks/UseStat';
import UseEffect from './Hooks/UseEffect';
import UseMemo from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import Header from './Style/Header';
import List1 from './List/List1';
import Fetch from './Hooks/CustomeHooks/Fetch';
import CallHook from './Hooks/CustomeHooks/CallHook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './Style/Features';
import Review from './Style/Review';
import Contactus from './Style/Contactus';
import LogOut from './Style/LogOut';
import LogIn from './Style/LogIn';
import Products from './Style/Products';
import Product from './Style/Product';
import Home from './Style/Home';
import Single from './Style/Single';
import Product1 from './Style/Product1';
import AddProduct from './Style/AddProduct';
// import useContext from './Hooks/UseContex/A';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path="/products" element={<Product />} />
          <Route path="/single" element={<Single />} />
          <Route path="/Product1" element={<Product1 />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>

    // <CallHook/>
    // <Fetch/>
    // <List1/>
    // <A/>
    // <UseReducer/>
    // <UseRef/>
    // <UseMemo/>
    // <PropsComp/>
    // <UseEffect/>
    // <UseStat/>
    // <StatMng/>
    // <FunctionComp/>
    // <PropsComp></PropsComp>
    // <LyfCycle/>
    // <ConstructComp/>
    // <CompInCom/>
    // <ClassComp/>
    // <SignUp/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <code>Hello React....!!</code>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )

}

export default App;
