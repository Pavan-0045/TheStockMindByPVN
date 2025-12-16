export default function Cards({ title, value, description, isPrimary }) {
  return (
    <div
      className={`rounded-xl p-5 shadow transition-all cursor-pointer ${
        isPrimary
          ? "hover:bg-purple-600 hover:text-white"
          : "bg-white hover:bg-purple-600 hover:text-white"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
