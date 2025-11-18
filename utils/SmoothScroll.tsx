"use client";
import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }: React.PropsWithChildren<object>) {
  return (
    <ReactLenis root options={{ duration: 1 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;