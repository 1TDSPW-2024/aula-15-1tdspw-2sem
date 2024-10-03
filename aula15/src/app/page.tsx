export default function Home() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Página Principal</h1>
      <div>
        <form action="">
        <select className="px-4 py-3 rounded-full">
        <option> - </option>
          <option>opção-1</option>
          <option>opção-2</option>
          <option>opção-3</option>
        </select>
        {/* Or change a checkbox color using text color utilities: */}
        <input type="checkbox" className="rounded text-pink-500" />
        <input type="email" className="form-input px-4 py-3 rounded-full" />

        <select className="form-select px-4 py-3 rounded-full">
          <option> - </option>
          <option>opção-1</option>
          <option>opção-2</option>
          <option>opção-3</option>
        </select>

        <input
          type="checkbox" className="form-checkbox rounded text-pink-500"
        />
        </form>
      </div>
    </div>
  );
}
