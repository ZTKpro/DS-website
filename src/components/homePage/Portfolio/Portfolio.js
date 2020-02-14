import React from "react"
import './Portfolio.scss'

import Draggable from 'react-draggable'; // The default

class Portfolio extends React.Component{

    render() {
        return(
            <section id="Portfolio" className="portfolio">

                <Draggable
                    axis="x"
                    handle=".portfolio__drag"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[100,100]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                    bounds={{left: -530, right: 1,}}
                    >
                    
                    <div className="portfolio__drag">

                        <div className="portfolio__item portfolio__item--1"></div>
                        <div className="portfolio__item portfolio__item--2"></div>
                        <div className="portfolio__item portfolio__item--3"></div>
                        <div className="portfolio__item portfolio__item--4"></div>

                    </div>
                </Draggable>

            </section>
        )
    }

}

export default Portfolio;
