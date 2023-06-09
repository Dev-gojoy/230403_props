import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-12 grid grid-cols-3">
      <Card cardName="A" color="bg-red-100" />
      <Card cardName="B" color="bg-orange-100" />
      <Card cardName="C" color="bg-yellow-100" />
      <Card cardName="D" color="bg-green-100" />
      <Card cardName="E" color="bg-red-100" />
      <Card cardName="F" color="bg-red-100" />
    </div>
  );
}

export default App;
