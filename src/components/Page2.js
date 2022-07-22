import React, { useState } from "react";
import { MainContainer, TabContainer } from './Style';



const Page2 = () => {

    const [ toggleState, setToggleState ] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <MainContainer>
            <div style={{fontSize: '4rem'}}>
                Page 2
            </div>
            <TabContainer>
                <div className='tab-container'>
                    <div className='title-container'>
                        <ul>
                            <li className= {toggleState === 1 ? "active-name" : "tab-name"} 
                                onClick={() => toggleTab(1)}
                            >
                                Tab 1
                            </li>
                            <li className= {toggleState === 2 ? "active-name" : "tab-name"} 
                                onClick={() => toggleTab(2)}
                            >
                                Tab 2
                            </li>
                            <li className= {toggleState === 3 ? "active-name" : "tab-name"} 
                                onClick={() => toggleTab(3)}
                            >
                                Tab 3
                            </li>
                        </ul>
                    </div>
                    <div className='content-container'>
                        <div className= {toggleState === 1 ? "tab-content active-content" : "tab-content"}>
                            Tab 1 - Content
                        </div>
                        <div className= {toggleState === 2 ? "tab-content active-content" : "tab-content"}>
                            Tab 2 - Content
                        </div>
                        <div className= {toggleState === 3 ? "tab-content active-content" : "tab-content"}>
                            Tab 3 - Content
                        </div>
                    </div>
                </div>
            </TabContainer>
        </MainContainer>
    );
}

export default Page2;
