import { dataSimulation } from "./data";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
          Monte Carlo Simulations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {dataSimulation.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-2">
                Simulation# {index + 1}: {item.linkText}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
