export const drawTile = (board, pos, color) => {
	if (board) {
		let tileSize = board.canvas.width / 20
		board.beginPath()
		board.fillStyle = color
		board.strokeStyle = color
		board.fillRect(pos.x * tileSize, pos.y * tileSize, tileSize, tileSize)
		board.stroke()
	}
}

export const clearCanvas = (board, pos = undefined) => {
	if (board) {
		let tileSize = board.canvas.width / 20
		if (!pos) {
			board.clearRect(0, 0, 600, 600)
		} else {
			board.clearRect(pos.x * tileSize, pos.y * tileSize, tileSize, tileSize)
		}
	}
}
