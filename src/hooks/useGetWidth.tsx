import { useEffect, useLayoutEffect, useState } from 'react'

const useGetWidth = ({ ref }: any) => {
  const [elementWidth, setElementWidth] = useState<number>(0)
  const [elementHeight, setElementHeight] = useState<number>(0)

  const updateParentWidth = () => {
    if (ref?.current) {
      setElementWidth(ref.current?.offsetWidth)
      setElementHeight(ref?.current?.offsetHeight)
    }
  }

  // Ejecuta updateParentWidth cuando el componente se monta y cuando ref cambia
  useLayoutEffect(() => {
    updateParentWidth()
  }, [ref?.current])

  // Añade un listener para el evento resize del navegador
  useEffect(() => {
    window.addEventListener('resize', updateParentWidth)
    return () => {
      window.removeEventListener('resize', updateParentWidth)
    }
  }, [])

  return {
    elementWidth,
    elementHeight,
  }
}

export { useGetWidth }
