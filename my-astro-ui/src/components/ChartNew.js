import React from "react";

const TextElement = ({ id, x, y, text }) => {
  return (
    <text
      textAnchor="start"
      fontFamily="sans-serif"
      fontSize="12"
      id={id}
      y={y}
      x={x}
      opacity="undefined"
      fillOpacity="null"
      strokeOpacity="null"
      strokeDasharray="null"
      strokeWidth="0"
      stroke="#000"
      fill="#000000"
    >
      {text}
    </text>
  );
};
export const ChartNew = ({ userChart }) => {
  const mystyle2 = {
    border: "solid-black",
    borderWidth: 1,
    backgroundColor: "white",
  };

  const lineStyle = {
    stroke: "black",
    strokeWidth: 1,
  };

  console.log(`userChart=${JSON.stringify(userChart)}`);
  var laganRashi = "";
  if (userChart && userChart.houses && userChart.houses.lagan >= 0) {
    laganRashi = userChart.houses.lagan;
  } else {
    console.error(`Error !! houses is undefined`);
    return <h1> Error !! houses undefined</h1>;
  }
  console.log(`userChart=${JSON.stringify(userChart)}`);
  console.log(`laganRashi=${laganRashi}`);
  const fLen = userChart.houses.first.length;
  console.log(`fLen=${fLen}`);
  return (
    <>
      <svg height="500" width="500" style={mystyle2}>
        <line x1="0" y1="0" x2="0" y2="500" style={lineStyle} />
        <line x1="0" y1="0" x2="500" y2="0" style={lineStyle} />
        <line x1="500" y1="0" x2="500" y2="500" style={lineStyle} />
        <line x1="500" y1="500" x2="0" y2="500" style={lineStyle} />
        <line x1="0" y1="0" x2="500" y2="500" style={lineStyle} />
        <line x1="500" y1="0" x2="0" y2="500" style={lineStyle} />
        <line x1="0" y1="250" x2="250" y2="0" style={lineStyle} />
        <line x1="250" y1="500" x2="500" y2="250" style={lineStyle} />
        <line x1="250" y1="0" x2="500" y2="250" style={lineStyle} />
        <line x1="0" y1="250" x2="250" y2="500" style={lineStyle} />
        <TextElement id="svg_1r" x="49%" y="45%" text={laganRashi} />

        <TextElement
          id="svg_1p"
          x="35%"
          y="25%"
          text={userChart.houses.first}
        />

        <TextElement
          id="svg_2r"
          x="23%"
          y="20%"
          text={(laganRashi + 1) % 12 !== 0 ? (laganRashi + 1) % 12 : 12}
        />

        <TextElement
          id="svg_2p"
          x="10%"
          y="7%"
          text={userChart.houses.second}
        />

        <TextElement
          id="svg_3r"
          x="5%"
          y="18%"
          text={(laganRashi + 2) % 12 !== 0 ? (laganRashi + 2) % 12 : 12}
        />

        <TextElement id="svg_3p" x="3%" y="28%" text={userChart.houses.third} />

        <TextElement
          id="svg_4r"
          x="40%"
          y="52%"
          text={(laganRashi + 3) % 12 !== 0 ? (laganRashi + 3) % 12 : 12}
        />

        <TextElement
          id="svg_4p"
          x="8%"
          y="52%"
          text={userChart.houses.fourth}
        />

        <TextElement
          id="svg_5r"
          x="5%"
          y="68%"
          text={(laganRashi + 4) % 12 !== 0 ? (laganRashi + 4) % 12 : 12}
        />

        <TextElement id="svg_5p" x="2%" y="78%" text={userChart.houses.fifth} />

        <TextElement
          id="svg_6r"
          x="22%"
          y="85%"
          text={(laganRashi + 5) % 12 !== 0 ? (laganRashi + 5) % 12 : 12}
        />

        <TextElement
          id="svg_6p"
          x="10%"
          y="98%"
          text={userChart.houses.sixth}
        />

        <TextElement
          id="svg_7r"
          x="47%"
          y="60%"
          text={(laganRashi + 6) % 12 !== 0 ? (laganRashi + 6) % 12 : 12}
        />

        <TextElement
          id="svg_7p"
          x="35%"
          y="77%"
          text={userChart.houses.seventh}
        />

        <TextElement
          id="svg_8r"
          x="72%"
          y="85%"
          text={(laganRashi + 7) % 12 !== 0 ? (laganRashi + 7) % 12 : 12}
        />

        <TextElement
          id="svg_8p"
          x="62%"
          y="98%"
          text={userChart.houses.eigth}
        />

        <TextElement
          id="svg_9r"
          x="88%"
          y="68%"
          text={(laganRashi + 8) % 12 !== 0 ? (laganRashi + 8) % 12 : 12}
        />

        <TextElement
          id="svg_9p"
          x="79%"
          y="78%"
          text={userChart.houses.ninth}
        />

        <TextElement
          id="svg_10r"
          x="55%"
          y="52%"
          text={(laganRashi + 9) % 12 !== 0 ? (laganRashi + 9) % 12 : 12}
        />

        <TextElement
          id="svg_10p"
          x="65%"
          y="52%"
          text={userChart.houses.tenth}
        />

        <TextElement
          id="svg_11r"
          x="90%"
          y="20%"
          text={(laganRashi + 10) % 12 !== 0 ? (laganRashi + 10) % 12 : 12}
        />

        <TextElement
          id="svg_11p"
          x="80%"
          y="28%"
          text={userChart.houses.eleventh}
        />

        <TextElement
          id="svg_12r"
          x="73%"
          y="20%"
          text={(laganRashi + 11) % 12 !== 0 ? (laganRashi + 11) % 12 : 12}
        />

        <TextElement
          id="svg_12p"
          x="57%"
          y="7%"
          text={userChart.houses.twelth}
        />
      </svg>
    </>
  );
};

export default ChartNew;
