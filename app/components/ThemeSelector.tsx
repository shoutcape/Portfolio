'use client';
//every interactive element that the client can interact with is clientsided, so 
//it needs to be seperated from serverside components for improved performance
import { useEffect } from "react";
import { themeChange } from "theme-change";
import styles from './ThemeSelector.module.css'

interface ThemeSelectorProps {
  setcurrentTheme: (theme: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({setcurrentTheme}) => {

  const themes = [
    "retro",
    "cupcake",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "lemonade",
    "night",
    "coffee",
    "dim",
    "nord",
    "sunset",
  ]

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div>
      <div className={styles.themeContainer}>
        {
          themes.map((theme) => (
            <div key={theme} onClick={() => setcurrentTheme(theme)} className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent" data-set-theme={theme} data-act-class="!outline-base-content">
              <div data-theme={theme} className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div className="font-bold">{theme}</div>
                  <div className="flex flex-wrap gap-1">
                    <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded sm:w-6">
                      <div className="text-primary-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded sm:w-6">
                      <div className="text-secondary-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded sm:w-6">
                      <div className="text-accent-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded sm:w-6">
                      <div className="text-neutral-content text-sm font-bold">A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div >
    </div>
  )
}

export default ThemeSelector
