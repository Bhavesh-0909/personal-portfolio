import Profile from "./components/page-section/profile";

function App() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-full gap-8 md:max-w-4/7 lg:max-w-4/7 px-8 py-20">
        <Profile/>
      </div>
    </div>
  )
}

export default App
