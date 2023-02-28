function changeToGame(_indexGame) {
    console.log("test :" + _indexGame)
    switch(_indexGame) {
        case 1:
            window.location.assign("../game/gamematch/index.html");
            break
        case 2:
            window.location.assign("../game/FastClickGame/index.html");
            break
    }
}