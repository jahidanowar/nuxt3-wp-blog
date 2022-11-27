export default function (): string {
  const colors = [
    "#FFC107",
    "#F44336",
    "#03A9F4",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#9C27B0",
    "#E91E63",
    "#009688",
    "#3F51B5",
    "#eab308",
    "#b91c1c",
    "#292524",
    "#0d6efd",
    "#6610f2",
    "#6f42c1",
    "#d63384",
    "#dc3545",
    "#fd7e14",
    "#ffc107",
    "#28a745",
    "#20c997",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
