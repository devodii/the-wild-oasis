import styled, { css } from "styled-components";

// simply use the css function (css``) to get style hints.
// const test = css`
//   text-align: center;
// `;

// whatever you pass to any styled component as the as prop would be injected as the tag for the component (automatically)

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
