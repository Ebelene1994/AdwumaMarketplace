import React from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut, Package, Star, TrendingUp, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

interface DashboardPageProps {
  onPageChange: (page: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onPageChange }) => {
  const { user, logout } = useAuth();
  const { items, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleLogout = () => {
    logout();
    onPageChange('home');
  };

  const recentOrders = [
    { id: '1', date: '2025-01-15', total: 45.50, status: 'Delivered', items: 3 },
    { id: '2', date: '2025-01-10', total: 32.00, status: 'Processing', items: 2 },
    { id: '3', date: '2025-01-08', total: 78.25, status: 'Delivered', items: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
              <p className="text-green-100 mt-2">Manage your account and track your orders</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.role}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg bg-green-50 text-green-600">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-gray-700">
                  <ShoppingBag className="w-4 h-4" />
                  <span>My Orders</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-gray-700">
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-gray-700">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-800">12</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-800">{formatPrice(245.75)}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Cart Items</p>
                    <p className="text-2xl font-bold text-gray-800">{items.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Cart */}
            {items.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Current Cart</h2>
                <div className="space-y-4">
                  {items.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">{item.product.farmerName}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{formatPrice(item.product.price)}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <span className="text-lg font-semibold">Total: {formatPrice(total)}</span>
                  <button
                    onClick={() => onPageChange('products')}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.items} items • {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{formatPrice(order.total)}</p>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;