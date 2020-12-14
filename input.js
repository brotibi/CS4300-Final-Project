space = false;
function handleInput(object) {

        //key = event.key
        /*switch(event.key){
            case "ArrowUp":
                //object.position.z -= 0.5
                break;
            case "ArrowDown":
                //object.position.z += 0.5
               break;
            case "ArrowLeft":
                object.position.x -= 0.5
                break;
            case "ArrowRight":
                object.position.x += 0.5
                break;
            case "w":
                //object.translateZ(-.5)
                break;
            case "a":
                object.rotateY(degToRad(5))
                break;
            case "s":
                //object.translateZ(.5)
                break;
            case "d":
                object.rotateY(degToRad(-5))
                break;
            case "r":
                window.location.reload()
                break;
            case " ":
                object.translateY(4)
                break;
            default:
                return;
        }*/
        if( keyboard.pressed("up")) {

        }

        if( keyboard.pressed("left")) {
            if(object.position.x >= -7)
            object.position.x -= 0.5
        }

        if( keyboard.pressed("right")) {
            if(object.position.x <= 7)
            object.position.x += 0.5
        }

        if( keyboard.pressed("down")) {
            
        }

        if( keyboard.pressed("w")) {
            
        }

        if( keyboard.pressed("a")) {
            object.rotateY(degToRad(2))
        }

        if( keyboard.pressed("s")) {
            
        }

        if( keyboard.pressed("d")) {
            object.rotateY(degToRad(-2))
        }

        if( keyboard.pressed("r")) {
            window.location.reload()
        }
        
        if( keyboard.pressed("space")) {
            //object.translateY(.5)
            if(object.position.y <= 4)
             object.translateY(.2)
            space = true;
        }
}