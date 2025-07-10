import { useCallback, useEffect, useLayoutEffect, useState } from "react";

interface GetWithProps {
  ref?: React.RefObject<HTMLElement>;
}

const useGetWidth = ({ ref }: GetWithProps) => {
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [elementHeight, setElementHeight] = useState<number>(0);

  const updateParentWidth = useCallback(() => {
    if (ref?.current) {
      setElementWidth(ref.current.offsetWidth);
      setElementHeight(ref.current.offsetHeight);
    } else {
      const element = document.querySelector("body");
      if (element) {
        setElementWidth(element.offsetWidth);
      }
    }
  }, [ref]);

  // Ejecuta updateParentWidth cuando el componente se monta y cuando ref cambia
  useLayoutEffect(() => {
    updateParentWidth();
  }, [updateParentWidth]);

  // Añade un listener para el evento resize del navegador
  useEffect(() => {
    window.addEventListener("resize", updateParentWidth);
    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, [updateParentWidth]);

  return {
    elementWidth,
    elementHeight,
  };
};

export { useGetWidth };
