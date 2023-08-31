

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
    
      <div className="bg-gray-800 w-1/5 text-white p-4">
        <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block hover:bg-red-300 hover:text-indigo-900 text-xl p-2 rounded hover:shadow-blue-300 hover:shadow-md ">
            Dashboard
          </a>
          <a href="/dashboard/users" className="block hover:bg-red-300 hover:text-indigo-900 text-xl p-2 rounded hover:shadow-blue-300 hover:shadow-md ">
            All Users
          </a>
         
        </nav>
      </div>

     
      <div className="w-4/5 p-8">{children}</div>
    </div>
  );
};

export default Layout;
