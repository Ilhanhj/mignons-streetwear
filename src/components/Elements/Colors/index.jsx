function Colors() {
  return (
    <div className="flex flex-col">
      <select name="color" id="color" className="cursor-pointer border p-4 rounded-xl">
        <option value="Black">Black</option>
        <option value="Beige">Beige</option>
        <option value="Gray">Gray</option>
      </select>
      <p className="text-sm text-neutral-400">Colors</p>
    </div>
  );
}

export default Colors;
