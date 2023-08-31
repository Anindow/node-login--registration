'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getUsers } from '@/utils/api';

const Dashboard = () => {
  const [loggedInUserName, setLoggedInUserName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    async function fetchLoggedInUserName() {
      try {
        const users = await getUsers();
        const loggedInUser = users.find(user => user._id === localStorage.getItem('userId'));
        if (loggedInUser) {
          setLoggedInUserName(loggedInUser.username);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchLoggedInUserName();
  }, []);

  const handleDropdownClick = () => {
    
    setDropdownOpen(prevOpen => !prevOpen);
  };
  return (
    <>
      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome to your dashboard, {loggedInUserName}!</p>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-gray-700">You can display various content here:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your recent activities</li>
            <li>Important notifications</li>
            <li>Data visualization</li>
          
          </ul>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4">
      
        <span className="text-gray-600 mr-2">
          {loggedInUserName}</span>
      
        <div className="relative inline-block text-left flex">
          <Image className=" " src="/user.svg" alt="user"  width={30} height={30} />
          <button
            type="button"
            className="focus:outline-none me-6 mt-2"
            id="user-menu"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={handleDropdownClick}
          >
           
            &#x25BE;
          </button>

          {dropdownOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
