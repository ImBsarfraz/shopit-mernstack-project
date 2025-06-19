import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer.jsx';
import Header from './components/layouts/Header.jsx';
import Home from './components/Home.jsx';
import PrductDetails from './components/product/ProductDetails.jsx';
import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Profile from './components/user/Profile.jsx';
import UpdateProfile from './components/user/UpdateProfile.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import UploadAvatar from './components/user/UploadAvatar.jsx';
import UpdatePassword from './components/user/UpdatePassword.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import ResetPassword from './components/auth/ResetPassword.jsx';
import Cart from './components/cart/Cart.jsx';
import Shipping from './components/cart/Shipping.jsx';
import ConfirmOrder from './components/cart/ConfirmOrder.jsx';
import PaymentMethod from './components/cart/PaymentMethod.jsx';
import MyOrders from './components/order/MyOrders.jsx';
import OrderDetails from './components/order/OrderDetails.jsx';
import Invoice from './components/invoice/Invoice.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import ListProducts from './components/admin/ListProducts.jsx';
import NewProduct from './components/admin/NewProduct.jsx';
import UpdateProduct from './components/admin/UpdateProduct.jsx';
import UploadImages from './components/admin/UploadImages.jsx';
import ListOrders from './components/admin/ListOrders.jsx';
import ProcessOrder from './components/admin/ProcessOrder.jsx';
import ListUsers from './components/admin/ListUsers.jsx';
import UpdateUser from './components/admin/UpdateUser.jsx';
import ProductReviews from './components/admin/ProductReviews.jsx';
import NotFoundComponent from './components/layouts/NotFoundComponent.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Toaster position='top-center' />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/products/:id' element={<PrductDetails />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/password/forgot' element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route path='/me/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }>
            </Route>
            <Route path='/me/update_profile' element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }>
            </Route>
            <Route
              path="/me/upload_avatar"
              element={
                <ProtectedRoute>
                  <UploadAvatar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update_password"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={<Cart />} />

            <Route
              path='/shipping'
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              }
            />
            <Route
              path='/confirm_order'
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path='/payment_method'
              element={
                <ProtectedRoute>
                  <PaymentMethod />
                </ProtectedRoute>
              }
            />
            <Route
              path='/me/orders'
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/order/:id"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invoice/order/:id"
              element={
                <ProtectedRoute>
                  <Invoice />
                </ProtectedRoute>
              }
            />


            <Route path="/admin/dashboard"
              element={
                <ProtectedRoute admin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/products"
              element={
                <ProtectedRoute admin={true}>
                  <ListProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/product/new"
              element={
                <ProtectedRoute admin={true}>
                  <NewProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products/:id"
              element={
                <ProtectedRoute admin={true}>
                  <UpdateProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products/:id/upload_images"
              element={
                <ProtectedRoute admin={true}>
                  <UploadImages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute admin={true}>
                  <ListOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders/:id"
              element={
                <ProtectedRoute admin={true}>
                  <ProcessOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users/"
              element={
                <ProtectedRoute admin={true}>
                  <ListUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users/:id"
              element={
                <ProtectedRoute admin={true}>
                  <UpdateUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/reviews/"
              element={
                <ProtectedRoute admin={true}>
                  <ProductReviews />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFoundComponent />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
