import React from 'react';

export default {
  title: 'Example/Misaligned Icons',
}

const IconOne = () => (
  <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Slice</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id="Rectangle-Copy-7" stroke="#979797" strokeWidth="2" x="-1" y="-1" width="20" height="20"></rect>
      <rect id="Rectangle-Copy-5" fill="#000000" x="1" y="1" width="16" height="16"></rect>
    </g>
  </svg>
)

const IconTwo = () => (
  <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Slice</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id="Rectangle-Copy-8" stroke="#979797" strokeWidth="2" x="-1" y="-1" width="28" height="28"></rect>
      <polygon id="Rectangle-Copy-6" fill="#000000" transform="translate(14.000000, 12.000000) rotate(-315.000000) translate(-14.000000, -12.000000) " points="6.92893219 4.92893219 21.0710678 4.92893219 21.0710678 19.0710678 6.92893219 19.0710678"></polygon>
    </g>
  </svg>

)

const IconThree = () => (
  <svg width="24px" height="23px" viewBox="0 0 24 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Slice</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id="Rectangle-Copy-9" stroke="#979797" strokeWidth="2" x="-1" y="-1" width="26" height="25"></rect>
      <path d="M10.5,2 C5.80557963,2 2,5.80557963 2,10.5 C2,15.1944204 5.80557963,19 10.5,19 C15.1944204,19 19,15.1944204 19,10.5 C19,5.80557963 15.1944204,2 10.5,2 Z" id="Oval-Copy" fill="#000000" fillRule="nonzero"></path>
    </g>
  </svg>
)

export const Example = () => {
  return (
    <div className="container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
              align-items: center;
            }
          `
        }}
      />

      <IconOne />

      <IconTwo />

      <IconThree />
    </div>
  )
}

export const WithBoundingBox = () => {
  return (
    <div className="container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
              align-items: center;
            }

            svg {
              border: 1px solid red;
            }
          `
        }}
      />

      <IconOne />

      <IconTwo />

      <IconThree />
    </div>
  )
}

export const NotCenterAligned = () => {
  return (
    <div className="container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
            }
          `
        }}
      />

      <IconOne />

      <IconTwo />

      <IconThree />
    </div>
  )
}

export const Vertical = () => {
  return (
    <div className="container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
              flex-direction: column;
            }
          `
        }}
      />

      <IconOne />

      <IconTwo />

      <IconThree />
    </div>
  )
}

export const WithText = () => {
  return (
    <div className="container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
              align-items: center;
            }

            .container > div {
              margin: 0 10px;
            }

            p {
              display: flex;
              align-items: center;
            }

            p svg {
              margin-right: 2px;
            }
          `
        }}
      />

      <div>
        <p>
          <IconOne />

          Item One
        </p>
      </div>

      <div>
        <p>
          <IconTwo />

          Item Two
        </p>
      </div>

      <div>
        <p>
          <IconThree />

          Item Three
        </p>
      </div>
    </div>
  )
}
