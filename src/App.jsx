import {useRef, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {SketchPicker} from "react-color";
function App() {
  const [color, setColor] = useState("#123321");
  const sketchpickerref = useRef(null);
  const handlechangecompletely = (color) => {
    setColor(color.hex);
  };
  const copytext = () => {
    console.log(sketchpickerref.current.contains(event.target));
    if (
      sketchpickerref.current &&
      !sketchpickerref.current.contains(event.target)
    ) {
      navigator.clipboard.writeText(color);
      alert("HexValue Copied Successfully");
    }
  };
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center place-items-center pt-36"
      style={{backgroundColor: color, transition: "background-color 2s linear"}}
      onClick={copytext}
    >
      <div ref={sketchpickerref}>
        <SketchPicker color={color} onChangeComplete={handlechangecompletely} />
      </div>
      <h2 className="text-3xl pt-4 font-sans text-yellow-500 font-bold">
        Color Picker
      </h2>
    </div>
  );
}

export default App;
