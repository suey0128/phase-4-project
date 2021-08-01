import {useState} from "react";

function HomeICPressOnFilter({onHandleColorCheckBoxChange, onHandleShapeCheckBoxChange, onHandleAddOnCheckBoxChange}) {



    return (
        <div>
            <div className="color-filter">
                <p>color</p>
                <input type="checkbox" id="all" name="all" value="all" check={false} onChange={onHandleColorCheckBoxChange}/>
                <label for="all">multi colors</label>
                <input type="checkbox" id="white" name="white" value="white" check={false} onChange={onHandleColorCheckBoxChange}/>
                <label for="white">white</label>
                <input type="checkbox" id="pink" name="pink" value="pink" check={false} onChange={onHandleColorCheckBoxChange}/>
                <label for="pink">pink</label>
                <input type="checkbox" id="nude" name="nude" value="nude" check={false} onChange={onHandleColorCheckBoxChange}/>
                <label for="nude">nude</label>
                <input type="checkbox" id="purple" name="purple" value="purple" check={false} onChange={onHandleColorCheckBoxChange}/>
                <label for="purple"> purple</label>
                <input type="checkbox" id="red" name="red" value="red" onChange={onHandleColorCheckBoxChange}/>
                <label for="red">red</label>
                <input type="checkbox" id="green" name="green" value="green" onChange={onHandleColorCheckBoxChange}/>
                <label for="green">green</label>
                <input type="checkbox" id="peach" name="peach" value="peach" onChange={onHandleColorCheckBoxChange}/>
                <label for="peach">peach</label>
                <input type="checkbox" id="chrome" name="chrome" value="chrome" onChange={onHandleColorCheckBoxChange}/>
                <label for="chrome">chrome</label>
                <input type="checkbox" id="black" name="black" value="black" onChange={onHandleColorCheckBoxChange}/>
                <label for="black">black</label>
                {/* <input type="checkbox" id="others" name="others" value="others" onChange={onHandleColorCheckBoxChange}/>
                <label for="others">others</label> */}
            </div>

            <div className="shape-filter">
                <p>shape</p>
                <input type="checkbox" id="coffin" name="coffin" value="coffin" onChange={onHandleShapeCheckBoxChange}/>
                <label for="coffin">coffin</label>
                <input type="checkbox" id="round" name="round" value="round" onChange={onHandleShapeCheckBoxChange}/>
                <label for="round">round</label>
                <input type="checkbox" id="stiletto" name="stiletto" value="stiletto" onChange={onHandleShapeCheckBoxChange}/>
                <label for="stiletto">stiletto</label>
                <input type="checkbox" id="square" name="square" value="square" onChange={onHandleShapeCheckBoxChange}/>
                <label for="square">square</label>
            </div>

            <div className="add-on-filter">
                <p>add on</p>
                <input type="checkbox" id="jewels" name="jewels" value="jewels" onChange={onHandleAddOnCheckBoxChange}/>
                <label for="jewels">jewels</label>
                <input type="checkbox" id="others" name="others" value="others" onChange={onHandleAddOnCheckBoxChange}/>
                <label for="others">others</label>
            </div>

            <br></br>


        </div>
    )
  }
  
  export default HomeICPressOnFilter;


//   marble
//   clould designs
//   glow in the dark
//   jewels
//   chrome polish
//   french tip
//   sparkles