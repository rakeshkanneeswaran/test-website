// pages/index.js

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Simple Next.js App</h1>
      <p className="text-xl text-gray-700 mb-8">This is some random text to display on the page.</p>

      {/* Buy Buttons */}
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=>{
          alert("button clicked")
        }}>Buy Item 1</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=>{
          alert("button clicked")
        }}>Buy Item 2</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={()=>{
          alert("button clicked")
        }}>Buy Item 3</button>
      </div>
    </div>
  );
}
