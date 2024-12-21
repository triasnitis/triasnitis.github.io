function changeToGame(_indexGame) {
    console.log("test :" + _indexGame)
    switch(_indexGame) {
        case 1:
            window.location.assign("../game/CandyMatch/index.html");
            break
        case 2:
            window.location.assign("../game/FastClickGame/index.html");
            break
        case 3:
            window.location.assign("../game/FaceOperation/index.html");
            break
        case 4:
            window.location.assign("../game/FallItem/index.html");
            break
    }
}