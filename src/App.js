import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Store from './utils/Store';
import WatchPage from './components/WatchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Demo from './components/Demo';

// Create the Redux store


function App() {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        },
        {
          path:"demo",
          element:<Demo/>
        }
      ]
      
    }
  ]);
  /*
  --Header
  --Body
      -sidebar
        MenuItems
      -MainContainer
        -ButtonList
        -VideoContainer
            -Video List
  */
  
  return (
    // Pass the Redux store to the Provider
    <Provider store={Store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;

