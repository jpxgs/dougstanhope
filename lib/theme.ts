export const THEME_STORAGE_KEY = "stanhope-theme"

export type ThemeChoice = "day" | "night"

export function persistTheme(theme: ThemeChoice) {
  const night = theme === "night"
  document.documentElement.classList.toggle("theme-night", night)
  document.documentElement.classList.toggle("theme-day", !night)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be blocked; the class still applies for this view.
  }
}

export function themeFromDocument(): ThemeChoice {
  return document.documentElement.classList.contains("theme-night") ? "night" : "day"
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var night=t==="night"||(t!=="day"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var root=document.documentElement;root.classList.toggle("theme-night",night);root.classList.toggle("theme-day",!night);}catch(e){}})();`
