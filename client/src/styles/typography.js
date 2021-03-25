import { css } from 'styled-components';

const Typography = css`
  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: var(--gray-500);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.5px;
    line-height: 1.1;
    font-weight: 900;
    color: var(--gray-900);
  }
`;

export default Typography;
