import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <head>
     <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    
  </head>
  <body>
    <footer>
      <div class="background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop
                offset="0%"
                style="stop-color: rgba(53, 127, 242, 0.6)"
              ></stop>
              <stop
                offset="100%"
                style="stop-color: rgba(38, 89, 190, 0.06)"
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlink:href="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlink:href="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlink:href="#wave" opacty=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <section>
        <ul class="socials">
          <li><a class="fa-brands fa-facebook"></a></li>
          <li><a class="fa-brands fa-twitter"></a></li>
          <li><a class="fa-brands fa-linkedin"></a></li>
          <li><a class="fa-brands fa-instagram"></a></li>
        </ul>
        <p class="legal">EMS© 2024 All rights reserved</p>
      </section>
    </footer>
  </body>
  `,
  styles: [
    `
    body {
    margin: 0;
    background: linear-gradient(#0d0d0d, #212121);
    font-family: "Euclid Circular A", "Poppins";
    color: #d6dfed;
  }
  
  html,
  body {
    height: 80%;
    margin: 0;
    padding: 0;
  }
  
  .background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .socials {
    gap: 20px;
  }
  
  .socials a {
    font-size: 24px;
  }
  
  .links {
    gap: 10px;
  }
  
  .legal {
    font-size: 12px;
    margin: 0;
  }
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(3) scaleX(2.25);
    transform-origin: bottom;
    box-sizing: border-box;
    display: block;
    pointer-events: none;
  }
  
  footer {
    position: fixed;
    left: 0;
    bottom: 0px;
    display: flex;
    width: 100%;
    height: 370px;
    z-index: -99;
  }
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
    padding-bottom: 80px;
    padding-left: 60px;
    width: 100%;
  }
  
  @media (width > 420px) {
    section {
      align-items: center;
      padding-left: 0;
      gap: 20px;
    }
  
    .links {
      gap: 20px;
    }
  }
    `
  ]
})
export class FooterComponent {

}
