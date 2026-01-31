import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import WhatsAppButton from "./components/WhatsAppButton";  // ← Importar

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <LandingPage />
      </main>
      <WhatsAppButton />  {/* ← Agregar aquí */}
    </>
  );
}

export default App;