import React, {useState}from 'react'

import HomeICGlueContainer from './HomeICGlueContainer';
import HomeICPressOnContainer from './HomeICPressOnContainer';
import HomeICHandCareContainer from './HomeICHandCareContainer';


function HomeItemContainer({showItemPage, pressOnOnDisplay, glueOnDisplay, handCareOnDisplay, setPressOnOnDisplay, pressOnArr}) {



    const displayItemPage = () => {
        if (showItemPage === "pressOn") {
        return <HomeICPressOnContainer pressOnOnDisplay={pressOnOnDisplay}
                                        setPressOnOnDisplay={setPressOnOnDisplay}
                                        pressOnArr={pressOnArr}
                                        />
        } else if (showItemPage === "glue") {
        return <HomeICGlueContainer glueOnDisplay={glueOnDisplay}
        
        
                />
        } else {
        return <HomeICHandCareContainer handCareOnDisplay={handCareOnDisplay}
        
        />
        }
    }

    return (
        <div>
            {displayItemPage()}
        </div>
    )
  }
  
  export default HomeItemContainer;