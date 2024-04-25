(function(){
    var isStart = false;
    vartetris = {
        board: [],
        boardDiv: null,
        canvas: null,
        pSize: 20,
        canvasHeight: 440,
        canvasWidht: 200,
        boardHeight: 0,
        boardWidth: 0,
        spawnX: 4,
        spawnY: 1,
        shapes: [
            [
                [-1,1],
                [0,1],
                [1,1],
                [0,0],//TEE
            ],
            [-1,0],
            [0,0],
            [1,0],
            [2,0],//line

            ],
            [
                [-1,-1],
                [-1,0],
                [0,0],
                [1,0],//L EL
            ],
            [
                [1,-1],
                [-1,0],
                [0,0],
                [1,0],//R EL
            ],
            [
                [0,-1],
                [1,-1],
                [-1,0],
                [0,0],//R ess
            ],
            [
                [-1,-1],
                [0,-1],
                [0,0],
                [1,0],//L ess
            ],
            [
                [0,-1],
                [1,-1],
                [0,0],
                [1,0],//square
            ],
            ],
    }
})