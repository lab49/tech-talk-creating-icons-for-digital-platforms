import React from 'react';

import bootstrap from './assets/bootstrap/bootstrap.svg';
import flow from './assets/flow.svg';

export default {
  title: 'Example/Usage'
}

export const Sprite = () => {
  return (
    <div style={{ color: 'red' }}>
      <svg class="bi" width="32" height="32" fill="currentColor">
        <use href={`${bootstrap}#heart-fill`} />
      </svg>
    </div>
  )
}

export const External = () => {
  return (
    <div style={{ color: 'red' }}>
      <img src={flow} />
    </div>
  )
}

export const ExternalAsBackground = () => {
  return (
    <div style={{ background: `url(${flow})`, width: 220, height: 220, border: '2px solid black' }} />
  )
}

export const BackgroundProperties = () => {
  return (
    <div style={{ background: `url(${flow})`, backgroundSize: '1000px', backgroundPosition: '-500px', width: 400, height: 400, border: '2px solid black' }} />
  )
}

export const Inline = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .test-svg path {
              transition: all .3s ease-in-out;
            }

            .test-svg:hover #shape-one {
              fill: red;
            }

            .test-svg:hover #shape-two {
              fill: blue;
            }
          `
        }}
      />

      <svg className="test-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" version="1.1" viewBox="0 0 48 48">
        <title>illustration/flow</title>
        <g id="illustration/flow" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
          <path id="shape-one" fill="#79C9FC" fill-rule="nonzero" d="M30,29 C32.7614237,29 35,26.7614237 35,24 C35,14.6111593 27.3888407,7 18,7 C8.61115925,7 1,14.6111593 1,24 C1,33.3888407 8.61115925,41 18,41 C19.3333404,41 20.6447683,40.8466238 21.9154603,40.5471706 C19.5096374,39.3319645 17.5510566,37.8612875 16.0456579,36.1314815 C14.1063138,33.9030427 12.769443,31.0725999 12.0293806,27.6556449 C11.360469,26.565281 11,25.3082308 11,24 C11,20.1340068 14.1340068,17 18,17 C21.8659932,17 25,20.1340068 25,24 C25,26.125 27.7040312,29 30,29 Z" />
          <path id="shape-two" fill="#FFC445" fill-rule="nonzero" d="M42,29 C44.7614237,29 47,26.7614237 47,24 C47,14.6111593 39.3888407,7 30,7 C20.6111593,7 13,14.6111593 13,24 C13,33.3888407 20.6111593,41 30,41 C31.3333404,41 32.6447683,40.8466238 33.9154603,40.5471706 C31.5096374,39.3319645 29.4051056,37.9781963 28.0456579,36.1314815 C26.0625,33.4375 23,27.1875 23,24 C23,20.1340068 26.1340068,17 30,17 C33.8659932,17 37,20.1340068 37,24 C37.02301,26.3435241 39.7040312,29 42,29 Z" transform="translate(30.000000, 24.000000) scale(-1, -1) translate(-30.000000, -24.000000)" />
        </g>
      </svg>
    </>
  )
}

export const WithAnimations = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .test-bubble path {
              transition: .4s cubic-bezier(0.34, 1.56, 0.64, 1);
              transition-property: transform, fill;
              mix-blend-mode: darken;
              will-change: transform, fill;
            }

            #bubble-one {
              fill: coral;
            }

            #bubble-two {
              transform-origin: center right;
              transition-delay: .15s;
            }

            #bubble-three {
              transform-origin: bottom left;
              transition-delay: .25s;
            }

            .test-bubble:hover #bubble-one {
              transform: scale(1.2);
              fill: darkslateblue;
            }

            .test-bubble:hover #bubble-two {
              transform: scale(1.1);
              fill: seagreen;
            }

            .test-bubble:hover #bubble-three {
              transform: scale(1.5);
              fill: tomato;
            }
          `
        }}
      />

      <svg className="test-bubble" xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1.1" viewBox="0 0 48 48">
        <g id="illustration/comments" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
          <path id="bubble-one" fill="#96D07C" d="M2.52730803,17.9196415 C2.44329744,17.9745167 2.36370847,18.000488 2.29303375,18.000488 C2.1197031,18.000488 2,17.8443588 2,17.5752855 L2,4 C2,1.790861 3.790861,3.23296945e-13 6,3.23296945e-13 L33.9995117,3.23296945e-13 C36.2086507,3.23296945e-13 37.9995117,1.790861 37.9995117,4 L37.9995117,9.999512 C37.9995117,12.208651 36.2086507,13.999512 33.9995117,13.999512 L8,13.999512 C7.83499225,13.999512 7.6723181,13.9895206 7.51254954,13.9701099 L2.52730803,17.9196415 Z" />
          <path id="bubble-two" fill="#FFD476" d="M46,19.5 L46,33.0747975 C46,33.3438708 45.8802969,33.5 45.7069663,33.5 C45.6362915,33.5 45.5567026,33.4740287 45.472692,33.4191535 L40.4887103,29.4704446 C40.3285371,29.489956 40.1654415,29.5 40,29.5 L18,29.5 C15.790861,29.5 14,27.709139 14,25.5 L14,19.5 C14,17.290861 15.790861,15.5 18,15.5 L42,15.5 C44.209139,15.5 46,17.290861 46,19.5 Z" />
          <path id="bubble-three" fill="#73E1E0" d="M7.51066,44.9703679 L2.52730803,47.9186655 C2.44329744,47.9735407 2.36370847,47.999512 2.29303375,47.999512 C2.1197031,47.999512 2,47.8433828 2,47.5743095 L2,35 C2,32.790861 3.790861,31 6,31 L26,31 C28.209139,31 30,32.790861 30,35 L30,41 C30,43.209139 28.209139,45 26,45 L8,45 C7.8343417,45 7.67103544,44.9899297 7.51066,44.9703679 Z" />
        </g>
      </svg>
    </>
  )
}
