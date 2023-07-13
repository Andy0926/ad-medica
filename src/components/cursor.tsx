import { useEffect, useRef } from 'react';

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  const animate = () => {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;

    outlineX += distX * CURSOR_SPEED;
    outlineY += distY * CURSOR_SPEED;

    if (cursor.current && cursorOutline.current) {
      cursor.current.style.left = `${mouseX}px`;
      cursor.current.style.top = `${mouseY}px`;
      cursorOutline.current.style.left = `${outlineX}px`;
      cursorOutline.current.style.top = `${outlineY}px`;
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = (event: MouseEvent) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    const animateEvent = requestAnimationFrame(animate);

    document.addEventListener('mousemove', mouseEventsListener);

    const cursorBgs = document.querySelectorAll('[data-cursor-bg]');

    const navElement = document.getElementById('navBar');

    cursorBgs.forEach((cursorBg) => {
      cursorBg.addEventListener('mouseenter', () => {
        if (cursorOutline.current) {
          cursorOutline.current.style.opacity = '0.6';
          cursorOutline.current.style.width = '36px';
          cursorOutline.current.style.height = '36px';
        }
      });

      cursorBg.addEventListener('mouseleave', () => {
        if (cursorOutline.current) {
          cursorOutline.current.style.opacity = '0';
          cursorOutline.current.style.width = '0px';
          cursorOutline.current.style.height = '0px';
        }
      });
    });

    if (navElement && cursorOutline.current) {
      navElement.addEventListener('mouseenter', () => {
        if (cursor.current) {
          cursor.current.style.opacity = '0';
          cursor.current.style.width = '0px';
          cursor.current.style.height = '0px';
        }
      });

      navElement.addEventListener('mouseleave', () => {
        if (cursor.current) {
          cursor.current.style.opacity = '1';
          cursor.current.style.width = '8px';
          cursor.current.style.height = '8px';
        }
      });
    }
    return () => {
      document.removeEventListener('mousemove', mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot cursor-dot--outline opacity-0"
        ref={cursorOutline}
      />
      <div className="cursor-dot" ref={cursor} />
    </>
  );
};
