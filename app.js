

const  init = () => {
    const gameWindow = document.querySelector("#game-window");
    gl = gameWindow.getContext("webgl");

    gameWindow.addEventListener(
        "mousedown",
        doMouseDown,
        false);

    const program = webglUtils.createProgramFromScripts(gl, "#vertex-shader-3d", "#fragment-shader-3d");
    gl.useProgram(program);
}