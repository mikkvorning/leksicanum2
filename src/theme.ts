import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
      fontWeight: 600,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      "50": "#fdf4ff",
      "100": "#fae8ff",
      "200": "#f5d0fe",
      "300": "#f0abfc",
      "400": "#e879f9",
      "500": "#d946ef",
      "600": "#c026d3",
      "700": "#a21caf",
      "800": "#86198f",
      "900": "#701a75",
    },
    info: {
      "50": "#eff6ff",
      "100": "#dbeafe",
      "200": "#bfdbfe",
      "300": "#93c5fd",
      "400": "#60a5fa",
      "500": "#3b82f6",
      "600": "#2563eb",
      "700": "#1d4ed8",
      "800": "#1e40af",
      "900": "#1e3a8a",
    },
    warning: {
      "50": "#fff7ed",
      "100": "#ffedd5",
      "200": "#fed7aa",
      "300": "#fdba74",
      "400": "#fb923c",
      "500": "#f97316",
      "600": "#ea580c",
      "700": "#c2410c",
      "800": "#9a3412",
      "900": "#7c2d12",
    },
    success: {
      "50": "#f0fdf4",
      "100": "#dcfce7",
      "200": "#bbf7d0",
      "300": "#86efac",
      "400": "#4ade80",
      "500": "#22c55e",
      "600": "#16a34a",
      "700": "#15803d",
      "800": "#166534",
      "900": "#14532d",
    },
  },
});

export default theme;
