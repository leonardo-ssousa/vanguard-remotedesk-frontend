export const lightTheme = {
  colors: {
    primary: "#27272a",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f4f4f5",
    tertiary: "#fafafa",
  },
  bw: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },
  font: {
    primary: "#1E1E1E",
    secondary: "#5f738f",
    tertiary: "#8ea3c2",
    white: "#ffffff",
  },
  auxiliar: {
    success: "#22C55E",
    alert: "#EF4444",
  },
  border: {
    default: "#e4e4e7",
    strong: "#d4d4d8",
    heavy: "#262626",
  },

  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
    md: "0 4px 12px -2px rgba(0, 0, 0, 0.06)",
    secondBorder: "0 0 0 3px rgba(0, 0, 0, 0.06)",
  },
};

export type ThemeType = typeof lightTheme;
