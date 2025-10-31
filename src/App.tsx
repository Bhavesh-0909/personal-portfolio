// App.tsx (Updated) 🚀

import { Outlet } from 'react-router-dom'; // 👈 Import Outlet

function App() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-full gap-8 md:max-w-4/7 lg:max-w-4/7 px-8 py-10">
        <Outlet />
      </div>
    </div>
  )
}

export default App