function Sizes() {
  return (
    <div className="flex flex-col">
      <select name="size" id="size" className="cursor-pointer border p-4 rounded-xl">
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <p className="text-sm text-neutral-400">Size</p>
    </div>
  );
}

export default Sizes;
