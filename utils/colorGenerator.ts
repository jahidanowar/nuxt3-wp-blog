export default function (): string {
  const colors = [
    "bg-amber-700",
    "bg-red-700",
    "bg-sky-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-orange-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-teal-700",
    "bg-indigo-700",
    "bg-yellow-700",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
