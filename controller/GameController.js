function changeToGame(_indexGame) {
    console.log("test :" + _indexGame, "typeof:", typeof _indexGame);
    switch(_indexGame) {
        case 1:
            window.location.assign("../game/CandyMatch/index.html"); //unity
            break
        case 2:
            window.location.assign("../game/FastClickGame/index.html");//cocos
            break
        case 3:
            window.location.assign("../game/FaceOperation/index.html");//unity
            break
        case 4:
            window.location.assign("../game/FallItem-M/index.html");//cocos
            break
        case 5:
            window.location.assign("../game/loopAtackBuild/index.html");// unity
            break
        case 6:
            window.location.assign("../game/BallBattleWeb/index.html"); // unity
            break
        case 7:
            window.location.assign("../game/GameSnake/index.html"); // unity
            break
    }
}


function changeToGameFromMain(_indexGame) {
    console.log("test :" + _indexGame, "typeof:", typeof _indexGame);
    switch(_indexGame) {
        case 1:
            window.location.assign("./game/CandyMatch/index.html"); //unity
            break
        case 2:
            window.location.assign("./game/FastClickGame/index.html");//cocos
            break
        case 3:
            window.location.assign("./game/FaceOperation/index.html");//unity
            break
        case 4:
            window.location.assign("./game/FallItem-M/index.html");//cocos
            break
        case 5:
            window.location.assign("./game/loopAtackBuild/index.html");// unity
            break
        case 6:
            window.location.assign("./game/BallBattleWeb/index.html"); // unity
            break
        case 7:
            window.location.assign("./game/GameSnake/index.html"); // unity
            break
    }
}