

// Import React
import * as React from 'react'

// Import Tetris component


// Define props for the Tetris Board
type TetrisBoardProps = {
    field: any[],
    gameOver: boolean,
    score: number,
    level: number,
    rotate: number
}

// create Tetris Board Component
const TetrisBoard: React.FC<TetrisBoardProps> = (props) => {
    // Create Board Rows
    let rows: any[] = []

    props.field.forEach((row, index) => {
        // Create board Columns
        const cols = row.map((column: any, index: number) => <div  className={`col-${column}`} key={index} /> )
        rows.push(<div className="tetris-board__row" key={index}  >{cols} </div> )

    })

    return (
        <div className="tetris-board">
            {/* 
             * Game board information */}
            <div className="tetris-bosrd__info" >
                <p className="tetris-Board__text">Level: {props.level}</p>

                <p className="testris-board__text" > Score: {props.score} </p>
                
                </div>
            {/* 
             * Game Board */}
            <div className="tetris-board__board" >{rows} </div>

        </div>
        )
}

export default TetrisBoard
