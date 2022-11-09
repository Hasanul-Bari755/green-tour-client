import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Route';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='lg:w-[90%] mx-auto h-screen'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
