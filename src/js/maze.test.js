const {changeBrightness,displayVictoryMess,toggleVisablity,Maze,DrawMaze} = require ("./maze");


test('changeBrightness',()=>{
    document.body.innerHTML ='<canvas id="sprite"></canvas>'
    var fakeCanvas = document.getElementById("sprite");
    var ctx = fakeCanvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 50, 50);
   changeBrightness(0.1,fakeCanvas)
});
test('displayVictoryMess',()=>{
    document.body.innerHTML = `<div id="Message-Container">
        <div id="message">
            <h1>Congratulations!</h1>
            <p>You are done.</p>
            <p id="moves"></p>
            <input id="okBtn" type="button" value="Cool!" />
        </div>
    </div>`
   displayVictoryMess(5);
});
test('toggleVisablity',()=>{
    document.body.innerHTML = `<div id="Message-Container"></div>`
    toggleVisablity('Message-Container');// turn on
    toggleVisablity('Message-Container');// turn off
});
test('drawmaze function', () => {
    // Set up our document body
    document.body.innerHTML =
        `<div id="view">
            <div id="mazeContainer">
                <canvas id="sprite"></canvas>
                <canvas id="mazeCanvas" class="border" height="1100" width="1100"></canvas>
            </div>
        </div>`;
    var mazeCanvas = document.getElementById("mazeCanvas");
    var ctx = mazeCanvas.getContext("2d");
    let maze = new Maze(800,800);

    // draw without endSprite
    draw = new DrawMaze(maze, ctx, 10, null);

    // draw with endSprite

    var finishSprite = document.getElementById('sprite');
    draw = new DrawMaze(maze, ctx, 10, finishSprite);

    // redraw
    draw.redrawMaze(20)


});

test('maze function', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    let maze = new Maze(800,800);
    expect(maze.startCoord()).toStrictEqual({
        x: 0,
        y: 0
    });
    jest.spyOn(global.Math, 'random').mockReturnValue(0.25);
    maze = new Maze(800,800);
    expect(maze.startCoord()).toStrictEqual({
        x: 0,
        y: 800-1
    });
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    maze = new Maze(800,800);
    expect(maze.startCoord()).toStrictEqual({
        x: 800-1,
        y: 0
    });
    jest.spyOn(global.Math, 'random').mockReturnValue(0.75);
    maze = new Maze(800,800);
    expect(maze.startCoord()).toStrictEqual({
        x: 800-1,
        y: 800 - 1
    })
})
