/* eslint-disable max-len */
export const DragIcon = () => (
  <svg viewBox="0 0 1024 1024" width="18" height="18" fill="#fff">
    <path d="M909.3 506.3L781.7 405.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 242.3c-3.7 4.7-0.4 11.7 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.7-2.9 3.7-8.5 0.1-11.4z" />
  </svg>
);

export const CopyIcon = ({ onClick }: any) => (
  <svg
    onClick={() => {
      onClick?.();
    }}
    viewBox="0 0 1024 1024"
    width="16"
    height="16"
  >
    <path
      d="M969.142857 219.428571A54.857143 54.857143 0 0 1 1024 274.285714v694.857143a54.857143 54.857143 0 0 1-54.857143 54.857143h-548.571428a54.857143 54.857143 0 0 1-54.857143-54.857143V804.571429H54.857143A54.857143 54.857143 0 0 1 0 749.714286V365.714286c0-30.281143 17.700571-72.557714 38.838857-93.696l233.142857-233.142857C293.12 17.737143 335.396571 0.036571 365.677714 0.036571h237.714286a54.857143 54.857143 0 0 1 54.857143 54.857143v187.428572c22.272-13.129143 50.870857-22.857143 73.142857-22.857143h237.714286zM658.285714 341.138286L487.424 512H658.285714V341.138286z m-365.714285-219.428572L121.709714 292.571429H292.571429V121.709714z m111.981714 369.737143l180.553143-180.553143v-237.714285h-219.428572v237.714285a54.857143 54.857143 0 0 1-54.857143 54.857143h-237.714285v365.714286h292.571428v-146.285714c0-30.281143 17.700571-72.557714 38.838857-93.696zM950.857143 950.857143V292.571429h-219.428572v237.714285a54.857143 54.857143 0 0 1-54.857142 54.857143H438.857143v365.714286h512z"
      fill="#fff"
    />
  </svg>
);

export const DeleteIcon = ({ onClick }: any) => (
  <svg
    onClick={() => {
      onClick?.();
    }}
    viewBox="0 0 1024 1024"
    width="16"
    height="16"
  >
    <path
      d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72z"
      fill="#fff"
    />
    <path
      d="M864 256H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
      fill="#fff"
    />
  </svg>
);

export const Drag1Icon = () => (
  <svg viewBox="0 0 1024 1024" width="22" height="22">
    <path
      d="M199.68 300.032m-49.152 0a4.8 4.8 0 1 0 98.304 0 4.8 4.8 0 1 0-98.304 0Z"
      fill="#707070"
    />
    <path
      d="M402.432 343.04 829.44 343.04c23.552 0 44.032-19.456 44.032-44.032S852.992 256 829.44 256L402.432 256c-23.552 0-44.032 19.456-44.032 44.032S377.856 343.04 402.432 343.04z"
      fill="#707070"
    />
    <path
      d="M199.68 512m-49.152 0a4.8 4.8 0 1 0 98.304 0 4.8 4.8 0 1 0-98.304 0Z"
      fill="#707070"
    />
    <path
      d="M829.44 468.992 402.432 468.992c-23.552 0-44.032 19.456-44.032 44.032s19.456 44.032 44.032 44.032L829.44 557.056c23.552 0 44.032-19.456 44.032-44.032S852.992 468.992 829.44 468.992z"
      fill="#707070"
    />
    <path
      d="M199.68 724.992m-49.152 0a4.8 4.8 0 1 0 98.304 0 4.8 4.8 0 1 0-98.304 0Z"
      fill="#707070"
    />
    <path
      d="M829.44 680.96 402.432 680.96c-23.552 0-44.032 19.456-44.032 44.032s19.456 44.032 44.032 44.032L829.44 769.024c23.552 0 44.032-19.456 44.032-44.032S852.992 680.96 829.44 680.96z"
      fill="#707070"
    />
  </svg>
);
