let animationhouseId
let currentDoor
const animateHouse = () => {
    animationhouseId = window.requestAnimationFrame(animateHouse);
    housesprite.draw();
    switch ($('.dialoguediv').attr('data')){
        case "0":
            charmander.draw();
        break
        case "1":
            mew.draw();
        break
        case "2":
            mow.draw();
        break
        case "3":

            totodile.draw();
        break
    }
    if(keys.q.pressed && lastkey == "q"){
        house.initiated = false;
        moving = true;
        $('.testdiv').addClass('hide');
        $('.dialoguediv').toggleClass('hide');
        $('.dialoguediv').removeAttr('data')
        $('.exitdiv').toggleClass('hide');
        window.cancelAnimationFrame(animationhouseId);
        animateMainGame();
    }
}