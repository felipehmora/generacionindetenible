export default function Navbar() {
  return (
    <nav className="bg-[#fbae00] p-[20px] flex items-center justify-center">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] mr-2" // Añade un margen a la derecha de la imagen
          src="https://generacionindetenible.developerpencilspeechllc.com/favicon.ico"
          alt="Logo"
        />
        <h1 className="text-[24px] font-bold">Lista de canciones</h1>{" "}
        {/* Puedes agregar más clases para estilizar el h1 */}
      </div>
    </nav>
  );
}
