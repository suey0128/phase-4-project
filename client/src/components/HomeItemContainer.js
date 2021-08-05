
import HomeICGlueContainer from './HomeICGlueContainer';
import HomeICPressOnContainer from './HomeICPressOnContainer';
import HomeICHandCareContainer from './HomeICHandCareContainer';


function HomeItemContainer({showItemPage, pressOnOnDisplay, glueOnDisplay, handCareOnDisplay, setPressOnOnDisplay, pressOnArr, onAddToCartClick}) {



    const displayItemPage = () => {
        if (showItemPage === "pressOn") {
        return <HomeICPressOnContainer pressOnOnDisplay={pressOnOnDisplay}
                                        setPressOnOnDisplay={setPressOnOnDisplay}
                                        pressOnArr={pressOnArr}
                                        onAddToCartClick={onAddToCartClick}
                                        />
        } else if (showItemPage === "glue") {
        return <HomeICGlueContainer glueOnDisplay={glueOnDisplay}
                                    onAddToCartClick={onAddToCartClick}
        
        
                />
        } else {
        return <HomeICHandCareContainer handCareOnDisplay={handCareOnDisplay}
                                        onAddToCartClick={onAddToCartClick}
        
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