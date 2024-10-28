'use client';
import { useEffect, useState } from 'react';
import ThemeSelector from './ThemeSelector'
import { useTheme } from 'next-themes';

const ModalButton = () => {
  const { theme } = useTheme()
  const [mounted, setmounted] = useState<boolean>(false)
  const [currentTheme, setcurrentTheme] = useState<string|null>(null)

  useEffect(() => {
    setmounted(true)
    if (theme) {
      setcurrentTheme(theme)
    }
  }, [theme])

  if (!mounted) {
    return null
  }

  const handleModal = () => {
    const themeModal = document.getElementById('themeModal') as HTMLDialogElement | null;
    if (themeModal) {
      themeModal.showModal()
    }
  }

  return (
    <div>
      <button onClick={handleModal} className='fixed z-10 end-2  top-4 flex-wrap btn btn-neutral sm:w-22 xl:w-32'>{currentTheme?.toLocaleUpperCase()}</button>
      <dialog id="themeModal" className='modal'>
        <div className='modal-box overflow-auto'>
          <ThemeSelector setcurrentTheme={setcurrentTheme}/>
        </div>
        <form method="dialog" className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default ModalButton
