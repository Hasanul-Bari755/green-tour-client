import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Route';

function App() {
  return (
    <div className='lg:w-[90%] mx-auto'>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
