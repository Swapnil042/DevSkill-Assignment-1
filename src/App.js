import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyComponent from './MyComponent'

function App() {

  const [info, setInfo] = useState({
                                    pageName: '',
                                    pageInfo: ''
                                  });
  
  const homeInfo = {
    pageName: 'Home',
    pageInfo: 'This is Home page'
  };
  const contactInfo = {
    pageName: 'Contact',
    pageInfo: 'This is Contact page'
  }

  const onNavigationClicked = (info)=>{
    setInfo(info);
  }
  return (
    <div className='App'>
      <button onClick={()=>onNavigationClicked(homeInfo)}>Home</button>
      <button onClick={()=>onNavigationClicked(contactInfo)}>Contact</button>
      <MyComponent pageName={info.pageName} pageInfo={info.pageInfo}/>
    </div>
  );
}

export default App;
