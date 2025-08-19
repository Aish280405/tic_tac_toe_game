


export default function GameBoard({onSelectSq,board}) {

	// const[gameBoard,setGameBoard]=useState(initialGameBoard);
	// function handleClick(rowIndex,colIndex){
	// 	setGameBoard((prevGameBoard)=>{
	// 		const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	})
	// 	onSelectSq();
	// }
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((PlayerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => onSelectSq(rowIndex, colIndex)} disabled={PlayerSymbol!==null}>
									{PlayerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
