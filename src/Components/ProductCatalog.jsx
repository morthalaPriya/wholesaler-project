import React, { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Truck, 
  MessageSquare, 
  Shield, 
  LayoutDashboard,
  UploadCloud,
  X,
  Plus,
  ChevronDown,
  MoreVertical
} from 'lucide-react';

export default function Products({ formData, activeView = 'products', setActiveView }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [productsList, setProductsList] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      status: 'Active',
      price: 89.99,
      moq: 50,
      stock: 500,
      image: null
    },
    {
      id: 2,
      name: 'Cotton T-Shirt (Pack of 10)',
      category: 'Clothing',
      status: 'Active',
      price: 45.00,
      moq: 100,
      stock: 2000,
      image: null
    },
    {
      id: 3,
      name: 'Organic Coffee Beans (5kg)',
      category: 'Food',
      status: 'Active',
      price: 120.00,
      moq: 20,
      stock: 150,
      image: null
    }
  ]);

  const initialFormState = {
    name: '',
    category: '',
    status: 'Draft',
    description: '',
    price: 0,
    moq: 1,
    stock: 0,
    shippingCost: 0
  };

  const [productForm, setProductForm] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();

    if (!productForm.name || !productForm.category) {
      alert('Please fill in required fields (Product Name and Category).');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productForm.name,
      category: productForm.category.charAt(0).toUpperCase() + productForm.category.slice(1),
      status: productForm.status,
      price: Number(productForm.price) || 0,
      moq: Number(productForm.moq) || 0,
      stock: Number(productForm.stock) || 0,
      image: selectedImage
    };

    setProductsList([newProduct, ...productsList]);
    setProductForm(initialFormState);
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans antialiased text-[#0F172A] w-full relative">
      
     

      <main className="flex-1 p-8 overflow-y-auto space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#0F172A]">Products</h1>
            <p className="text-xs text-slate-400 mt-0.5">Manage your product catalog</p>
          </div>
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-52 bg-[#F1F5F9] w-full flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full bg-[#F3F4F6]" />
                )}
                
                <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-md text-white ${
                  product.status === 'Active' ? 'bg-[#0F172A]' : 'bg-slate-500'
                }`}>
                  {product.status}
                </span>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F172A] leading-snug">{product.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{product.category}</p>
                  </div>
                  <button type="button" className="text-slate-400 hover:text-slate-600 cursor-pointer">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Price</span>
                    <span className="font-semibold text-[#0F172A]">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>MOQ</span>
                    <span className="font-semibold text-[#0F172A]">{product.moq} units</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Stock</span>
                    <span className="font-semibold text-[#0F172A]">{product.stock} units</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-8 pt-6 pb-4 flex items-center justify-between border-b border-slate-100">
              <h2 className="text-lg font-bold text-[#0F172A]">Add New Product</h2>
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSaveProduct} className="p-8 overflow-y-auto space-y-4 text-left">
              
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Product Images
                </label>
                
                <label 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-all cursor-pointer relative overflow-hidden"
                >
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden" 
                  />

                  {selectedImage ? (
                    <div className="relative w-full h-32 flex items-center justify-center">
                      <img src={selectedImage} alt="Preview" className="h-full object-contain rounded-xl" />
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(null);
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-slate-400 mb-2">
                        <UploadCloud className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <p className="text-xs font-semibold text-[#0F172A]">
                        Drag & drop images or click to browse
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        PNG, JPG up to 5MB each
                      </p>
                    </>
                  )}
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={productForm.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      required
                      value={productForm.category}
                      onChange={handleInputChange}
                      className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] appearance-none focus:outline-none focus:bg-white focus:border-purple-500 transition-all cursor-pointer"
                    >
                      <option value="">Select category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="food">Food</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Status
                  </label>
                  <div className="relative">
                    <select
                      name="status"
                      value={productForm.status}
                      onChange={handleInputChange}
                      className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] appearance-none focus:outline-none focus:bg-white focus:border-purple-500 transition-all cursor-pointer"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={productForm.description}
                  onChange={handleInputChange}
                  placeholder="Describe your product..."
                  className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 text-xs text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-purple-500 transition-all resize-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Price (USD) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Minimum Order Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="moq"
                    value={productForm.moq}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={productForm.stock}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    Shipping Cost (USD)
                  </label>
                  <input
                    type="number"
                    name="shippingCost"
                    value={productForm.shippingCost}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-xs font-medium text-white transition-colors shadow-sm cursor-pointer active:scale-95"
                >
                  Save Product
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}