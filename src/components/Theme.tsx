import { useState } from "react";

function Theme({handleClick}) {
  const [isCheckedLight, setIsCheckedLight] = useState<boolean>(true);
  const [isCheckedDark, setIsCheckedDark] = useState<boolean>(false);
  return (
    <div className="theme">
      <div
      onClick={()=>{handleClick()
     
        setIsCheckedLight(false);
        setIsCheckedDark(true);}
        
    }>
        <input
          checked={isCheckedDark}
          
          type="checkbox"
          name=""
          id=""
        />
        <p>Dark</p>
      </div>
      <div   onClick={() => {
            setIsCheckedLight(true);
            setIsCheckedDark(false);
            
          }}>
        <input
        
          checked={isCheckedLight}
          type="checkbox"
          name=""
          id=""
        />
        <p>Light</p>
      </div>
    </div>
  );
}

export default Theme;
