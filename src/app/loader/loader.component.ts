import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader">
  <div class="loaderMiniContainer">
    <div class="barContainer">
      <span class="bar"></span>
      <span class="bar bar2"></span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 101 114"
      class="svgIcon"
    >
      <circle
        stroke-width="7"
        stroke="black"
        transform="rotate(36.0692 46.1726 46.1727)"
        r="29.5497"
        cy="46.1727"
        cx="46.1726"
      ></circle>
      <line
        stroke-width="7"
        stroke="black"
        y2="111.784"
        x2="97.7088"
        y1="67.7837"
        x1="61.7089"
      ></line>
    </svg>
  </div>
</div>
  `,
  styles: [`
   .loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loaderMiniContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 130px;
  height: fit-content;
}
.barContainer {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  background-position: left;
}
.bar {
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    rgb(161, 94, 255),
    rgb(217, 190, 255),
    rgb(161, 94, 255)
  );
  background-size: 200% 100%;
  border-radius: 10px;
  animation: bar ease-in-out 3s infinite alternate-reverse;
}
@keyframes bar {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
.bar2 {
  width: 50%;
}
.svgIcon {
  position: absolute;
  left: -25px;
  margin-top: 18px;
  z-index: 2;
  width: 70%;
  animation: search ease-in-out 3s infinite alternate-reverse;
}
@keyframes search {
  0% {
    transform: translateX(0%) rotate(70deg);
  }

  100% {
    transform: translateX(100px) rotate(10deg);
  }
}
.svgIcon circle,
line {
  stroke: rgb(162, 55, 255);
}
.svgIcon circle {
  fill: rgba(98, 65, 142, 0.238);
}

  `]
})
export class LoaderComponent {}