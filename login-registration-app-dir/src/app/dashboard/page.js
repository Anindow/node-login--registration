const Dashboard = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <div className="max-w-md p-6 bg-white rounded shadow-md">
          <p className="mb-4">Welcome to your dashboard!</p>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-700">You can display various content here:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Your recent activities</li>
              <li>Important notifications</li>
              <li>Data visualization</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;