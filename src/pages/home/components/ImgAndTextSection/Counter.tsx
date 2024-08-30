import { useState, useEffect, useRef } from "react";

interface Icounter {
  end: number;
  start: number;
}
export function Counter({start = 0, end} : Icounter){
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              if (entries[0].isIntersecting && !hasStarted) {
                  setHasStarted(true);
              }
          },
          {
              threshold: 0.5, // Quando 50% do elemento estiver visível
          }
      );

      if (elementRef.current) {
          observer.observe(elementRef.current);
      }

      return () => {
          if (elementRef.current) {
              observer.unobserve(elementRef.current);
          }
      };
  }, [hasStarted]);

  useEffect(() => {
      if (hasStarted) {
          let current = start;
          const duration = 2000; // duração total do efeito em milissegundos
          const incrementTime = Math.ceil(duration / (end - start));

          const timer = setInterval(() => {
              current += 1;
              setCount(current);
              if (current === end) clearInterval(timer);
          }, incrementTime);

          return () => clearInterval(timer); // Limpar intervalo ao desmontar o componente
      }
  }, [hasStarted,start, end]);
  return(
    <span ref={elementRef}>{count}</span>
  )
}