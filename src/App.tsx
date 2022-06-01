import { Fragment } from 'react';/*Fragment là thẻ chứa thôi không có giá trj*/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRouter } from './routes';
import DefaultLayout from './components/workspace/default-layout/DefaultLayout';//layout cũ
import LayoutDault from './layout/add-phone-layout';
function App() {
  return (
    <div>
      <Routes>
        {
          publicRouter.map((route,index)=>{   
            // const Layout = route.layout === null ? Fragment : DefaultLayout;layout cũ
            const Layout = route.layout === null ? Fragment : LayoutDault;
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                 <Page/>
              </Layout>
          } />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
