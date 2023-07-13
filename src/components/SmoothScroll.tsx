import React, { useEffect, useRef } from 'react';

import useWindowSize from '@/hooks/useWindowSize';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // 1.
  const windowSize = useWindowSize();

  // 2.
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  // 3.
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.getBoundingClientRect().height
    }px`;
  };

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current)
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
