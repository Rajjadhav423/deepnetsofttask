


import  { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

import rectangle from '../assets/reactangle.png';
import reactangle1 from '../assets/Rectangle1.png';
import background1 from '../assets/background1.png';
import left from '../assets/left.png';
import right from '../assets/right.png';
import axiosInstance from '../api/axiosInstance';

interface Menu {
  _id: string;
  name: string;
  description: string;
}

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  menu: string;
}

export const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Food');
  const [menus, setMenus] = useState<Menu[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeMenuId, setActiveMenuId] = useState<string>('');

 
  useEffect(() => {
    axiosInstance
      .get('/menus')
      .then((response) => {
        const data = response.data;
        setMenus(data);
        const initialMenu = data.find((menu: Menu) => menu.name === selectedCategory);
        if (initialMenu) {
          setActiveMenuId(initialMenu._id);
        }
      })
      .catch((error) => console.error('Error fetching menus:', error));
  }, []);
  
  useEffect(() => {
    if (activeMenuId) {
      axiosInstance
        .get(`/items/${activeMenuId}`)
        .then((response) => setItems(response.data))
        .catch((error) => console.error('Error fetching items:', error));
    }
  }, [activeMenuId]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const menu = menus.find(m => m.name === category);
    if (menu) {
      setActiveMenuId(menu._id);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        {/* Hero Section */}
        <div
          style={{ backgroundImage: `url(${rectangle})` }}
          className="w-full h-[200px] md:h-[311px] bg-cover bg-center flex items-center justify-center px-4"
        >
          <div className="text-center">
            <h1
              className="text-4xl md:text-[75px] text-white font-semibold leading-tight md:leading-[111.15px] tracking-[0.03em]"
              style={{
                fontFamily: 'oswald',
                textShadow: '4px 4px 4px rgba(255, 0, 0, 0.7)',
              }}
            >
              MENU
            </h1>
            <p
              className="text-[#BBBBBB] text-sm md:text-base max-w-[95%] md:w-[681px] mx-auto font-normal leading-[21.82px] text-center"
              style={{ fontFamily: 'Kelly Slab' }}
            >
              Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
            </p>
          </div>
        </div>

        {/* Category Buttons */}
        <div 
          style={{ backgroundImage: `url(${reactangle1})` }} 
          className="w-full py-4 md:h-[79px] flex flex-wrap gap-2 md:gap-4 text-white justify-center"
        >
          {menus.map((menu) => (
            <button
              key={menu._id}
              className={`border border-[#0796EF] ${
                selectedCategory === menu.name ? 'bg-[#0796EF]' : 'bg-black'
              } h-[40px] md:h-[50px] w-[100px] md:w-[114px] px-4 md:px-10 text-white text-[14px] md:text-[16px] font-semibold leading-[23.71px] tracking-[0.03em] text-center md:text-left`}
              style={{
                fontFamily: 'oswald',
                textShadow: '1px 1px 2px rgba(255, 0, 0, 1)',
              }}
              onClick={() => handleCategoryChange(menu.name)}
            >
              {menu.name}
            </button>
          ))}
        </div>

        {/* Menu Items Display */}
        <div className="relative min-h-[500px] md:h-[672px]">
          <img src={background1} className="object-cover w-full h-full absolute" alt="Background" />

          <div className="absolute inset-0 bg-[#000000CC]">
            <div className='flex justify-between'>
              <div className="hidden md:block text-white">
                <img src={left} className='h-[641px] mt-10' alt="" />
              </div>
              
              <div className="w-full md:w-auto px-4 md:px-0">
                <div className="space-y-6 md:space-y-8 mt-16 md:mt-32">
                  <div className="flex items-center justify-center space-x-4 py-4">
                    <div className="w-8 md:w-16 h-1 bg-white"></div>
                    <h2 
                      className="text-white font-bold text-3xl md:text-[50px] tracking-wider uppercase"
                      style={{
                        fontFamily: 'oswald',
                        textShadow: '4px 4px 4px rgba(255, 0, 0, 0.7)',
                      }}
                    >
                      {selectedCategory} Menu
                    </h2>
                    <div className="w-8 md:w-16 h-1 bg-white"></div>
                  </div>

                  <div className="max-h-[400px] md:max-h-none overflow-y-auto px-4">
                    {items.length > 0 ? (
                      items.map((item) => (
                        <div key={item._id} className="text-white mt-8 md:mt-11">
                          <div className="flex items-baseline">
                            <span 
                              className="text-base md:text-lg font-medium"
                              style={{
                                fontFamily: 'oswald',
                              }}
                            >
                              {item.name}
                            </span>
                            <div className="flex-1 mx-2 border-b border-dotted border-gray-600 relative top-[-5px]"></div>
                            <span 
                              className="text-base md:text-lg"
                              style={{
                                fontFamily: 'oswald'
                              }}
                            >
                              {item.price}
                            </span>
                          </div>
                          <p 
                            className="text-gray-400 text-xs md:text-sm mt-1"
                            style={{
                              fontFamily: 'Kelly Slab',
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-white text-center">No items available in this category</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img src={right} className='h-[611px] mt-14' alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
