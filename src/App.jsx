// import './App.css'
// import Tooltip from "./components/Tooltip.jsx";

import { useState } from "react";

function App() {
  const [width, setWidth] = useState(10);

  const [isSpan, setIsSpan] = useState(false);
  const [isFlex, setIsFlex] = useState(false);
  const Component = isSpan
    ? ({ children, ...rest }) => <span {...rest}>{children}</span>
    : ({ children, ...rest }) => <div {...rest}>{children}</div>;

  const ellipsisStyles = {
    color: "blue",
    whiteSpace: "nowrap",
    // width: "200px",
    maxWidth: "100%",
    // height: "50px",
    textOverflow: "ellipsis",
    // overflowWrap: "break-word",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
  };

  const containerStyles = {
    width: `${width}%`,
    border: "1px solid black",
    display: isFlex ? "flex" : "block",
  };

  return (
    <div>
      <>
        <h1>Case 1: Hardcoded width (as percent/pixel)</h1>
        <button onClick={() => setWidth((w) => (w -= 10))} type="button">
          -{width}
        </button>
        <button onClick={() => setWidth((w) => (w += 10))} type="button">
          +{width}
        </button>
        <br />
        <button onClick={() => setIsSpan((p) => !p)} type="button">
          {JSON.stringify({ isSpan })}
        </button>
        <button onClick={() => setIsFlex((p) => !p)} type="button">
          {JSON.stringify({ isFlex })}
        </button>

        <br />
        <br />

        {JSON.stringify({ ellipsisStyles })}
        <hr />
        {JSON.stringify({ containerStyles })}

        <br />
        <br />

        {width}
        <div style={containerStyles}>
          <Component style={ellipsisStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            pariatur, modi aliquid impedit maxime autem laudantium,
            reprehenderit debitis omnis quis accusamus aut tempora distinctio
            fuga ipsam! Nisi, adipisci fugit! Obcaecati?
          </Component>
        </div>
      </>
    </div>
  );
}

// hardcoded ratio

export function App2() {
  const [containerWidth, setContainerWidth] = useState(10);
  // 30, 70

  const [appleWidth, setAppleWidth] = useState(10);
  const [bananaWidth, setBananaWidth] = useState(10);
  const [chikooWidth, setChikooWidth] = useState(10);
  const [dWidth, setDWidth] = useState(10);
  const [eWidth, setEWidth] = useState(10);

  const [isSpan, setIsSpan] = useState(false);
  const [isFlex, setIsFlex] = useState(false);
  const Component = isSpan
    ? ({ children, ...rest }) => <span {...rest}>{children}</span>
    : ({ children, ...rest }) => <div {...rest}>{children}</div>;

  const containerStyles = {
    width: `${containerWidth}%`,
    border: "1px solid black",
    display: isFlex ? "flex" : "block",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const ellipsisStylesApple = {
    color: "blue",
    whiteSpace: "nowrap",
    // flexBasis: "10%",
    flexBasis: `${appleWidth}%`,
    // flexGrow: 1,
    flexShrink: 0,
    maxWidth: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
    // width: "50px",
  };

  const ellipsisStylesBanana = {
    color: "red",
    whiteSpace: "nowrap",
    // flexBasis: "40%",
    flexBasis: `${bananaWidth}%`,
    maxWidth: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
    // width: "50px",
  };
  const ellipsisStylesChikoo = {
    color: "hotpink",
    whiteSpace: "nowrap",
    // flexBasis: "40%",
    flexBasis: `${chikooWidth}%`,
    maxWidth: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
    // width: "50px",
  };
  const ellipsisStylesD = {
    color: "hotpink",
    whiteSpace: "nowrap",
    // flexBasis: "40%",
    flexBasis: `${dWidth}%`,
    maxWidth: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
    // width: "50px",
  };
  const ellipsisStylesE = {
    color: "goldenyellow",
    whiteSpace: "nowrap",
    // flexBasis: "40%",
    flexBasis: `${eWidth}%`,
    flexShrink: 0,
    maxWidth: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: isSpan ? "inline-block" : "block",
  };

  return (
    <div>
      <>
        <h1>Case 2: Flex container and children have ellipses</h1>
        <button
          onClick={() => setContainerWidth((w) => (w -= 10))}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => setContainerWidth((w) => (w += 10))}
          type="button"
        >
          +
        </button>
        <br />
        <button onClick={() => setAppleWidth((w) => (w -= 10))} type="button">
          🍎-{appleWidth}
        </button>
        <button onClick={() => setAppleWidth((w) => (w += 10))} type="button">
          🍎+{appleWidth}
        </button>
        &nbsp;
        <button onClick={() => setBananaWidth((w) => (w -= 10))} type="button">
          🍌-{bananaWidth}
        </button>
        <button onClick={() => setBananaWidth((w) => (w += 10))} type="button">
          🍌+{bananaWidth}
        </button>
        &nbsp;
        <button onClick={() => setChikooWidth((w) => (w -= 10))} type="button">
          ⏰-{bananaWidth}
        </button>
        <button onClick={() => setChikooWidth((w) => (w += 10))} type="button">
          ⏰+{bananaWidth}
        </button>
        &nbsp;
        <button onClick={() => setDWidth((w) => (w -= 10))} type="button">
          ⭐️-{bananaWidth}
        </button>
        <button onClick={() => setDWidth((w) => (w += 10))} type="button">
          ⭐️+{bananaWidth}
        </button>
        &nbsp;
        <button onClick={() => setEWidth((w) => (w -= 10))} type="button">
          🔥-{bananaWidth}
        </button>
        <button onClick={() => setEWidth((w) => (w += 10))} type="button">
          🔥+{bananaWidth}
        </button>
        <br />
        <button onClick={() => setIsSpan((p) => !p)} type="button">
          {JSON.stringify({ isSpan })}
        </button>
        &nbsp;
        <button onClick={() => setIsFlex((p) => !p)} type="button">
          {JSON.stringify({ isFlex })}
        </button>
        <br />
        <br />
        {JSON.stringify({ ellipsisStylesApple })}
        <br />
        {JSON.stringify({ ellipsisStylesBanana })}
        <br />
        {JSON.stringify({ ellipsisStylesChikoo })}
        <br />
        {JSON.stringify({ ellipsisStylesD })}
        <br />
        {JSON.stringify({ ellipsisStylesE })}
        <hr />
        {JSON.stringify({ containerStyles })}
        <br />
        <br />
        {containerWidth}
        <div style={containerStyles}>
          <Component style={ellipsisStylesApple}>🍎 Pic</Component>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              overflow: "hidden",
              flexGrow: 1,
            }}
          >
            <Component style={ellipsisStylesBanana}>
              🍌 Text ipsum dolor sit amet consectetur adipisicing elit. Quam
              pariatur, modi aliquid impedit maxime autem laudantium,
              reprehenderit debitis omnis quis accusamus aut tempora distinctio
              fuga ipsam! Nisi, adipisci fugit! Obcaecati?
            </Component>
            <Component style={ellipsisStylesChikoo}>
              ⏰ Bottom text ipsum dolor sit amet consectetur adipisicing elit.
              Quam pariatur, modi aliquid impedit maxime autem laudantium,
              reprehenderit debitis omnis quis accusamus aut tempora distinctio
              fuga ipsam! Nisi, adipisci fugit! Obcaecati?
            </Component>
            {/* <Component style={ellipsisStylesD}>
              ⭐️ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              pariatur, modi aliquid impedit maxime autem laudantium,
              reprehenderit debitis omnis quis accusamus aut tempora distinctio
              fuga ipsam! Nisi, adipisci fugit! Obcaecati?
            </Component> */}
          </div>
          <Component style={ellipsisStylesE}>
            🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            pariatur, modi aliquid impedit maxime autem laudantium,
            reprehenderit debitis omnis quis accusamus aut tempora distinctio
            fuga ipsam! Nisi, adipisci fugit! Obcaecati?
          </Component>
        </div>
      </>
    </div>
  );
}

export default App;
