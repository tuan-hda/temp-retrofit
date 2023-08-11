import React, { useState } from 'react';

const Nav = () => {
  const [fallback, setFallback] = useState(true);

  return (
    <div className="relative h-full w-full">
      <iframe
        onLoad={() => setFallback(false)}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20994.345678802078!2d106.6376047401912!3d10.798882449368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295015ba7437%3A0x681ed1b0c038208a!2se.town%202!5e0!3m2!1sen!2s!4v1691726352212!5m2!1sen!2s&z=99"
        className="h-full w-full invert-[90%] hue-rotate"
      ></iframe>
      {fallback && (
        <div className="h-full w-full bg-black absolute top-0 z-10" />
      )}
    </div>
  );
};

export default Nav;
