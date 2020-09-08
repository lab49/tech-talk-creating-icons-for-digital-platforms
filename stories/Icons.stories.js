import React from 'react';

export default {
  title: 'Example/Icons',
};

export const PoorlyDrawn = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            svg {
              margin: 0 10px;
            }
          `
        }}
      />

      <p>Exported directly from Sketch:</p>

      <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Path</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Path" stroke="#000000" strokeWidth="3" points="2.2488511 12.8106618 2.2488511 2.38708496 12.7826287 2.38708496 12.7826287 12.8106618"></polygon>
        </g>
      </svg>

      <svg width="17px" height="15px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Shape</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M16.3804932,11.8440755 L16.3804932,14.7600911 L0.497070312,14.7600911 L0.497070312,11.8440755 L16.3804932,11.8440755 Z M16.3804932,6 L16.3804932,8.95458984 L0.497070312,8.95458984 L0.497070312,6 L16.3804932,6 Z M16.3804932,0.261108398 L16.3804932,3.21569824 L0.497070312,3.21569824 L0.497070312,0.261108398 L16.3804932,0.261108398 Z" id="Shape" fill="#000000"></path>
        </g>
      </svg>

      <svg width="15px" height="15px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Path-3" fill="#000000" points="5.03759766 0 9.0546875 0 9.0546875 5.04211426 14.1624756 5.04211426 14.1624756 9.07214355 9.0546875 9.07214355 9.0546875 14.0158691 5.03759766 14.0158691 5.03759766 9.07214355 0 9.07214355 0 5.04211426 5.03759766 5.04211426"></polygon>
        </g>
      </svg>

      <hr />

      <p>Optimized with SVGO:</p>

      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" d="M2.249 12.81V2.388h10.534v10.424z" fill="none" /></svg>

      <svg width="17" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16.38 11.844v2.916H.497v-2.916H16.38zm0-5.844v2.955H.497V6H16.38zm0-5.739v2.955H.497V.26H16.38z" fill="#000" /></svg>

      <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M5.038 0h4.017v5.042h5.107v4.03H9.055v4.944H5.038V9.072H0v-4.03h5.038z" /></svg>
    </div>
  );
}

export const Crisp = () => {
  return (
    <div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            svg {
              margin: 0 10px;
            }
          `
        }}
      />

      <p>Exported directly from Sketch:</p>

      <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Path Copy</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M13,0 L13,13 L0,13 L0,0 L13,0 Z M10,3 L3,3 L3,10 L10,10 L10,3 Z" id="Path-Copy" fill="#000000" fillRule="nonzero"></path>
          <rect id="Rectangle" stroke="#979797" x="-2.5" y="-2.5" width="18" height="18"></rect>
        </g>
      </svg>

      <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect id="Rectangle-Copy" stroke="#979797" x="-2.5" y="-2.5" width="18" height="18"></rect>
          <g id="Group" fill="#000000">
            <polygon id="Path-2-Copy-5" points="0 6.85562718e-14 13 6.85562718e-14 13 3 0 3"></polygon>
            <polygon id="Path-2-Copy-4" points="0 5 13 5 13 8 0 8"></polygon>
            <polygon id="Path-2-Copy-3" points="0 10 13 10 13 13 0 13"></polygon>
          </g>
        </g>
      </svg>

      <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect id="Rectangle-Copy-2" stroke="#979797" x="-2.5" y="-2.5" width="18" height="18"></rect>
          <path d="M5,0 L8,0 L8,5 L13,5 L13,8 L8,8 L8,13 L5,13 L5,8 C1.66666667,8 0,8 0,8 C0,8 0,7 0,5 L5,5 L5,0 Z" id="Path-3-Copy" fill="#000000"></path>
        </g>
      </svg>

      <hr />

      <p>Optimized with SVGO:</p>

      <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M13 0v13H0V0h13zm-3 3H3v7h7V3z" fill="#000" /><path stroke="#979797" d="M-2.5-2.5h18v18h-18z" /></g></svg>

      <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path stroke="#979797" d="M-2.5-2.5h18v18h-18z" /><g fill="#000"><path d="M0 0h13v3H0zM0 5h13v3H0zM0 10h13v3H0z" /></g></g></svg>

      <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path stroke="#979797" d="M-2.5-2.5h18v18h-18z" /><path d="M5 0h3v5h5v3H8v5H5V8H0V5h5V0z" fill="#000" /></g></svg>
    </div>
  )
}
