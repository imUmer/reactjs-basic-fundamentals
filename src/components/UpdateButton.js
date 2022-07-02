import { CommonContext } from "./commonContext";
export default function UpdateButton() {
  return (
    <div>
      <CommonContext.Consumer>
        {({ updateColor }) => (
          <button onClick={()=>updateColor('yellow')}> Update Color</button>
        )}
      </CommonContext.Consumer>
    </div>
  );
}
