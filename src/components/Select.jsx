export default function Select() {
  return (
    <select className="flex-grow m-1 p-3 border border-primary rounded-full bg-background-light text-text-light font-poppins text-sm transition-all duration-300 w-full">
      <option
        value=""
        className="flex-grow m-1 p-3 border border-primary rounded-full bg-background-light text-text-light font-poppins text-sm transition-all duration-300 w-full"
      >
        Categorías
      </option>
      <option
        value="Adoración"
        className="flex-grow m-1 p-3 border border-primary rounded-full bg-background-light text-text-light font-poppins text-sm transition-all duration-300 w-full"
      >
        Adoración
      </option>
      <option
        value="Alabanza"
        className="flex-grow m-1 p-3 border border-primary rounded-full bg-background-light text-text-light font-poppins text-sm transition-all duration-300 w-full"
      >
        Alabanza
      </option>
      <option
        value="Ofrenda"
        className="flex-grow m-1 p-3 border border-primary rounded-full bg-background-light text-text-light font-poppins text-sm transition-all duration-300 w-full"
      >
        Ofrenda
      </option>
    </select>
  );
}
