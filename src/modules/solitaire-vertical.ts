import utils from "../../node_modules/decentraland-ecs-utils/index"

export function SolitaireGameVertical() : void{
    /* #region Code Variables */
    let solitairePositionX = 7.75;
    let solitairePositionY = 2;
    let solitairePositionZ = 6;

    let solitaireRotationX = 0;
    let solitaireRotationY = 0;
    let solitaireRotationZ = 0;

    let cardOriginalSize = 1.5;
    let cardScale = 0.15;

    var spacingY = 0.001;
    var spacingZ = 0.06;

    // Define all cards
    var allCards = ["ac","ad","ah","as","2c","2d","2h","2s","3c","3d","3h","3s","4c","4d","4h","4s","5c","5d","5h","5s","6c","6d","6h","6s","7c","7d","7h","7s","8c","8d","8h","8s","9c","9d","9h","9s","10c","10d","10h","10s","jc","jd","jh","js","qc","qd","qh","qs","kc","kd","kh","ks"];

    // Render all cards
    var allEntityCards = [];

    // For clipToCardBase() function
    let suitCards = ["a","2","3","4","5","6","7","8","9","10","j","q","k"];

    // For refreshClickCards(cardIndex) function
    var clickedliftsize = 0.05;

    // For card positions
    var moveCardPosition = [];
    /* #endregion */

    /* #region Initial load functions */
    function prepareAllCards(){
        allEntityCards = [];

        for(var x = 0 ; x < allCards.length ; x++ ){
            allEntityCards[x] = [];
            allEntityCards[x]["name"] = allCards[x];
            allEntityCards[x]["entity"] = new Entity();
            allEntityCards[x]["base"] = "pilebase1";
            allEntityCards[x]["basecount"] = x;
            allEntityCards[x]["facingfront"] = false;
            allEntityCards[x]["draggable"] = false;
            allEntityCards[x]["clicked"] = false;
        }

        shuffle(allEntityCards);
    }

    function loadAllCards(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["entity"].addComponent(new GLTFShape("models/cards/"+allEntityCards[x]["name"]+".gltf"));
            allEntityCards[x]["entity"].addComponent(new Transform());
            allEntityCards[x]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
            allEntityCards[x]["entity"].getComponent(Transform).position.set(solitairePositionX, solitairePositionY, solitairePositionZ - (spacingY * (x+1)));
            allEntityCards[x]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 0, 0);
            // Using dynamic setting of add component onclick does not register dynamic variable
            addOnClick(x);
        }

        // Using loop to render all 52 cards causes a freeze up
        engine.addEntity(allEntityCards[0]["entity"]);
        engine.addEntity(allEntityCards[1]["entity"]);
        engine.addEntity(allEntityCards[2]["entity"]);
        engine.addEntity(allEntityCards[3]["entity"]);
        engine.addEntity(allEntityCards[4]["entity"]);
        engine.addEntity(allEntityCards[5]["entity"]);
        engine.addEntity(allEntityCards[6]["entity"]);
        engine.addEntity(allEntityCards[7]["entity"]);
        engine.addEntity(allEntityCards[8]["entity"]);
        engine.addEntity(allEntityCards[9]["entity"]);
        engine.addEntity(allEntityCards[10]["entity"]);
        engine.addEntity(allEntityCards[11]["entity"]);
        engine.addEntity(allEntityCards[12]["entity"]);
        engine.addEntity(allEntityCards[13]["entity"]);
        engine.addEntity(allEntityCards[14]["entity"]);
        engine.addEntity(allEntityCards[15]["entity"]);
        engine.addEntity(allEntityCards[16]["entity"]);
        engine.addEntity(allEntityCards[17]["entity"]);
        engine.addEntity(allEntityCards[18]["entity"]);
        engine.addEntity(allEntityCards[19]["entity"]);
        engine.addEntity(allEntityCards[20]["entity"]);
        engine.addEntity(allEntityCards[21]["entity"]);
        engine.addEntity(allEntityCards[22]["entity"]);
        engine.addEntity(allEntityCards[23]["entity"]);
        engine.addEntity(allEntityCards[24]["entity"]);
        engine.addEntity(allEntityCards[25]["entity"]);
        engine.addEntity(allEntityCards[26]["entity"]);
        engine.addEntity(allEntityCards[27]["entity"]);
        engine.addEntity(allEntityCards[28]["entity"]);
        engine.addEntity(allEntityCards[29]["entity"]);
        engine.addEntity(allEntityCards[30]["entity"]);
        engine.addEntity(allEntityCards[31]["entity"]);
        engine.addEntity(allEntityCards[32]["entity"]);
        engine.addEntity(allEntityCards[33]["entity"]);
        engine.addEntity(allEntityCards[34]["entity"]);
        engine.addEntity(allEntityCards[35]["entity"]);
        engine.addEntity(allEntityCards[36]["entity"]);
        engine.addEntity(allEntityCards[37]["entity"]);
        engine.addEntity(allEntityCards[38]["entity"]);
        engine.addEntity(allEntityCards[39]["entity"]);
        engine.addEntity(allEntityCards[40]["entity"]);
        engine.addEntity(allEntityCards[41]["entity"]);
        engine.addEntity(allEntityCards[42]["entity"]);
        engine.addEntity(allEntityCards[43]["entity"]);
        engine.addEntity(allEntityCards[44]["entity"]);
        engine.addEntity(allEntityCards[45]["entity"]);
        engine.addEntity(allEntityCards[46]["entity"]);
        engine.addEntity(allEntityCards[47]["entity"]);
        engine.addEntity(allEntityCards[48]["entity"]);
        engine.addEntity(allEntityCards[49]["entity"]);
        engine.addEntity(allEntityCards[50]["entity"]);
        engine.addEntity(allEntityCards[51]["entity"]);

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["basecount"] = x;
        }
    }

    var allCardBack = [];
    function loadCardBases(){
        /// Cardplaybase back
        for(var x = 1 ; x <= 7 ; x++ ){
            allCardBack[allCardBack.length] = [];
            allCardBack[allCardBack.length-1]["name"] = "cardplaybase"+x+"bg";
            allCardBack[allCardBack.length-1]["entity"] = new Entity();
            allCardBack[allCardBack.length-1]["entity"].addComponent(new GLTFShape("models/cards/back.gltf"));
            allCardBack[allCardBack.length-1]["entity"].addComponent(new Transform());
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).position.set(moveCardPosition["cardplaybase"+x]["x"] + (cardOriginalSize * cardScale), moveCardPosition["cardplaybase"+x]["y"], moveCardPosition["cardplaybase"+x]["z"]);
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
            // Using dynamic setting of add component onclick does not register dynamic variable
            addOnClickBackOnLatest("cardplaybase"+x+"bg");
        }


        /// Dealbase back
        for(var x = 1 ; x <= 4 ; x++ ){
            allCardBack[allCardBack.length] = [];
            allCardBack[allCardBack.length-1]["name"] = "dealbase"+x+"bg";
            allCardBack[allCardBack.length-1]["entity"] = new Entity();
            allCardBack[allCardBack.length-1]["entity"].addComponent(new GLTFShape("models/cards/back.gltf"));
            allCardBack[allCardBack.length-1]["entity"].addComponent(new Transform());
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).position.set(moveCardPosition["dealbase"+x]["x"] + (cardOriginalSize * cardScale), moveCardPosition["dealbase"+x]["y"], moveCardPosition["dealbase"+x]["z"]);
            allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
            // Using dynamic setting of add component onclick does not register dynamic variable
            addOnClickBackOnLatest("dealbase"+x+"bg");
        }

        /// Pilebase back
        allCardBack[allCardBack.length] = [];
        allCardBack[allCardBack.length-1]["name"] = "pilebase1bg";
        allCardBack[allCardBack.length-1]["entity"] = new Entity();
        allCardBack[allCardBack.length-1]["entity"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack[allCardBack.length-1]["entity"].addComponent(new Transform());
        allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).position.set(moveCardPosition["pilebase1"]["x"] + (cardOriginalSize * cardScale), moveCardPosition["pilebase1"]["y"], moveCardPosition["pilebase1"]["z"]);
        allCardBack[allCardBack.length-1]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        addOnClickBackOnLatest("pilebase1bg");

        /// Register all back entity to engine
        engine.addEntity(allCardBack[allCardBack.length-1]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-2]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-3]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-4]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-5]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-6]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-7]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-8]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-9]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-10]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-11]["entity"]);
        engine.addEntity(allCardBack[allCardBack.length-12]["entity"]);
    }

    function addOnClick(index){
        if(allEntityCards[index]["name"] == "ac"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("ac");
            }));
        }
        else if(allEntityCards[index]["name"] == "ad"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("ad");
            }));
        }
        else if(allEntityCards[index]["name"] == "ah"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("ah");
            }));
        }
        else if(allEntityCards[index]["name"] == "as"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("as");
            }));
        }
        else if(allEntityCards[index]["name"] == "2c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("2c");
            }));
        }
        else if(allEntityCards[index]["name"] == "2d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("2d");
            }));
        }
        else if(allEntityCards[index]["name"] == "2h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("2h");
            }));
        }
        else if(allEntityCards[index]["name"] == "2s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("2s");
            }));
        }
        else if(allEntityCards[index]["name"] == "3c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("3c");
            }));
        }
        else if(allEntityCards[index]["name"] == "3d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("3d");
            }));
        }
        else if(allEntityCards[index]["name"] == "3h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("3h");
            }));
        }
        else if(allEntityCards[index]["name"] == "3s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("3s");
            }));
        }
        else if(allEntityCards[index]["name"] == "4c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("4c");
            }));
        }
        else if(allEntityCards[index]["name"] == "4d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("4d");
            }));
        }
        else if(allEntityCards[index]["name"] == "4h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("4h");
            }));
        }
        else if(allEntityCards[index]["name"] == "4s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("4s");
            }));
        }
        else if(allEntityCards[index]["name"] == "5c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("5c");
            }));
        }
        else if(allEntityCards[index]["name"] == "5d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("5d");
            }));
        }
        else if(allEntityCards[index]["name"] == "5h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("5h");
            }));
        }
        else if(allEntityCards[index]["name"] == "5s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("5s");
            }));
        }
        else if(allEntityCards[index]["name"] == "6c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("6c");
            }));
        }
        else if(allEntityCards[index]["name"] == "6d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("6d");
            }));
        }
        else if(allEntityCards[index]["name"] == "6h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("6h");
            }));
        }
        else if(allEntityCards[index]["name"] == "6s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("6s");
            }));
        }
        else if(allEntityCards[index]["name"] == "7c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("7c");
            }));
        }
        else if(allEntityCards[index]["name"] == "7d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("7d");
            }));
        }
        else if(allEntityCards[index]["name"] == "7h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("7h");
            }));
        }
        else if(allEntityCards[index]["name"] == "7s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("7s");
            }));
        }
        else if(allEntityCards[index]["name"] == "8c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("8c");
            }));
        }
        else if(allEntityCards[index]["name"] == "8d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("8d");
            }));
        }
        else if(allEntityCards[index]["name"] == "8h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("8h");
            }));
        }
        else if(allEntityCards[index]["name"] == "8s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("8s");
            }));
        }
        else if(allEntityCards[index]["name"] == "9c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("9c");
            }));
        }
        else if(allEntityCards[index]["name"] == "9d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("9d");
            }));
        }
        else if(allEntityCards[index]["name"] == "9h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("9h");
            }));
        }
        else if(allEntityCards[index]["name"] == "9s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("9s");
            }));
        }
        else if(allEntityCards[index]["name"] == "10c"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("10c");
            }));
        }
        else if(allEntityCards[index]["name"] == "10d"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("10d");
            }));
        }
        else if(allEntityCards[index]["name"] == "10h"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("10h");
            }));
        }
        else if(allEntityCards[index]["name"] == "10s"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("10s");
            }));
        }
        else if(allEntityCards[index]["name"] == "jc"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("jc");
            }));
        }
        else if(allEntityCards[index]["name"] == "jd"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("jd");
            }));
        }
        else if(allEntityCards[index]["name"] == "jh"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("jh");
            }));
        }
        else if(allEntityCards[index]["name"] == "js"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("js");
            }));
        }
        else if(allEntityCards[index]["name"] == "qc"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("qc");
            }));
        }
        else if(allEntityCards[index]["name"] == "qd"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("qd");
            }));
        }
        else if(allEntityCards[index]["name"] == "qh"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("qh");
            }));
        }
        else if(allEntityCards[index]["name"] == "qs"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("qs");
            }));
        }
        else if(allEntityCards[index]["name"] == "kc"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("kc");
            }));
        }
        else if(allEntityCards[index]["name"] == "kd"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("kd");
            }));
        }
        else if(allEntityCards[index]["name"] == "kh"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("kh");
            }));
        }
        else if(allEntityCards[index]["name"] == "ks"){
            allEntityCards[index]["entity"].addComponent(new OnClick(event =>{
                cardclick("ks");
            }));
        }
    }

    function addOnClickBackOnLatest(basename){
        allCardBack[allCardBack.length-1]["entity"].addComponent(new OnClick(event =>{
            cardclick(basename);
        }));
    }

    function loadMoveCardPosition(){
        /* #region Location Config */
        var cardbasetop;
        var cardbaseleft = {};
        var dealbasetop;
        var dealbaseleft = {};
        var pilebasetop1;
        var pilebaseleft1;
        var pilebasetop2;
        var pilebaseleft2;


        cardbasetop = solitairePositionY - 0.5;
        cardbaseleft["cardplaybase1"] = solitairePositionX;
        cardbaseleft["cardplaybase2"] = solitairePositionX + 0.25;
        cardbaseleft["cardplaybase3"] = solitairePositionX + 0.5;
        cardbaseleft["cardplaybase4"] = solitairePositionX + 0.75;
        cardbaseleft["cardplaybase5"] = solitairePositionX + 1.0;
        cardbaseleft["cardplaybase6"] = solitairePositionX + 1.25;
        cardbaseleft["cardplaybase7"] = solitairePositionX + 1.50;
        dealbasetop = solitairePositionY;
        dealbaseleft["dealbase1"] = cardbaseleft["cardplaybase4"];
        dealbaseleft["dealbase2"] = cardbaseleft["cardplaybase5"];
        dealbaseleft["dealbase3"] = cardbaseleft["cardplaybase6"];
        dealbaseleft["dealbase4"] = cardbaseleft["cardplaybase7"];
        pilebasetop1 = dealbasetop;
        pilebaseleft1 = cardbaseleft["cardplaybase1"] ;
        pilebasetop2 = dealbasetop;
        pilebaseleft2 = cardbaseleft["cardplaybase2"] ;
        /* #endregion */

        /* #region Location Setup */
        moveCardPosition["pilebase1"] = [];
        moveCardPosition["pilebase1"]["x"] = pilebaseleft1;
        moveCardPosition["pilebase1"]["y"] = pilebasetop1;
        moveCardPosition["pilebase1"]["z"] = solitairePositionZ;

        moveCardPosition["pilebase2"] = [];
        moveCardPosition["pilebase2"]["x"] = pilebaseleft2;
        moveCardPosition["pilebase2"]["y"] = pilebasetop2;
        moveCardPosition["pilebase2"]["z"] = solitairePositionZ;

        moveCardPosition["dealbase1"] = [];
        moveCardPosition["dealbase1"]["x"] = dealbaseleft["dealbase1"];
        moveCardPosition["dealbase1"]["y"] = dealbasetop;
        moveCardPosition["dealbase1"]["z"] = solitairePositionZ;

        moveCardPosition["dealbase2"] = [];
        moveCardPosition["dealbase2"]["x"] = dealbaseleft["dealbase2"];;
        moveCardPosition["dealbase2"]["y"] = dealbasetop;
        moveCardPosition["dealbase2"]["z"] = solitairePositionZ;

        moveCardPosition["dealbase3"] = [];
        moveCardPosition["dealbase3"]["x"] = dealbaseleft["dealbase3"];;
        moveCardPosition["dealbase3"]["y"] = dealbasetop;
        moveCardPosition["dealbase3"]["z"] = solitairePositionZ;

        moveCardPosition["dealbase4"] = [];
        moveCardPosition["dealbase4"]["x"] = dealbaseleft["dealbase4"];;
        moveCardPosition["dealbase4"]["y"] = dealbasetop;
        moveCardPosition["dealbase4"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase1"] = [];
        moveCardPosition["cardplaybase1"]["x"] = cardbaseleft["cardplaybase1"];
        moveCardPosition["cardplaybase1"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase1"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase2"] = [];
        moveCardPosition["cardplaybase2"]["x"] = cardbaseleft["cardplaybase2"];;
        moveCardPosition["cardplaybase2"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase2"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase3"] = [];
        moveCardPosition["cardplaybase3"]["x"] = cardbaseleft["cardplaybase3"];;
        moveCardPosition["cardplaybase3"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase3"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase4"] = [];
        moveCardPosition["cardplaybase4"]["x"] = cardbaseleft["cardplaybase4"];;
        moveCardPosition["cardplaybase4"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase4"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase5"] = [];
        moveCardPosition["cardplaybase5"]["x"] = cardbaseleft["cardplaybase5"];;
        moveCardPosition["cardplaybase5"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase5"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase6"] = [];
        moveCardPosition["cardplaybase6"]["x"] = cardbaseleft["cardplaybase6"];;
        moveCardPosition["cardplaybase6"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase6"]["z"] = solitairePositionZ;

        moveCardPosition["cardplaybase7"] = [];
        moveCardPosition["cardplaybase7"]["x"] = cardbaseleft["cardplaybase7"];;
        moveCardPosition["cardplaybase7"]["y"] = cardbasetop;
        moveCardPosition["cardplaybase7"]["z"] = solitairePositionZ;
        /* #endregion */
    }

    function initialLoad(){
        loadMoveCardPosition();
        prepareAllCards();
        loadAllCards();
        loadCardBases();
    }
    /* #endregion */

    /* #region New Game functions */
    function resetAllCards(){
        for(var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["base"] = "pilebase1";
            allEntityCards[x]["basecount"] = x;
            allEntityCards[x]["facingfront"] = false;
            allEntityCards[x]["draggable"] = false;
            allEntityCards[x]["clicked"] = false;
        }
    }

    // To shuffle array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function newGame(){
        shuffle(allEntityCards);
        resetAllCards();
        refreshPositionAll();
        refreshRotationAll();
    }
    /* #endregion */

    /* #region World template */

    function moveCard(cardIndex, base){
        var lengthofbase = 0;

        if(allEntityCards[cardIndex]["base"] != base){
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == base){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }
        }
        else{
            lengthofbase = allEntityCards[cardIndex]["basecount"];
        }

        var px = moveCardPosition[base]["x"];
        var py = moveCardPosition[base]["y"];
        var pz = moveCardPosition[base]["z"] - (spacingY * (lengthofbase+1));

        if(allEntityCards[cardIndex]["facingfront"]) px += (cardOriginalSize * cardScale);
        if(base.includes("cardplaybase")) py -= (spacingZ * (lengthofbase));

        allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(px, py, pz);

        allEntityCards[cardIndex]["base"] = base;
        allEntityCards[cardIndex]["basecount"] = lengthofbase;
    }

    function moveCardAnimated(cardIndex, base){
        var lengthofbase = 0;

        if(allEntityCards[cardIndex]["base"] != base){
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == base){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }
        }
        else{
            lengthofbase = allEntityCards[cardIndex]["basecount"];
        }

        var px = moveCardPosition[base]["x"];
        var py = moveCardPosition[base]["y"];
        var pz = moveCardPosition[base]["z"] - (spacingY * (lengthofbase+1));

        if(allEntityCards[cardIndex]["facingfront"]) px += (cardOriginalSize * cardScale);
        if(base.includes("cardplaybase")) py -= (spacingZ * (lengthofbase));

        let SP = allEntityCards[cardIndex]["entity"].getComponent(Transform).position;
        let EP = new Vector3(px, py, pz);
        allEntityCards[cardIndex]["entity"].addComponent(new utils.MoveTransformComponent(SP, EP, 0.25));

        allEntityCards[cardIndex]["base"] = base;
        allEntityCards[cardIndex]["basecount"] = lengthofbase;
    }

    function refreshPositionAll(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            refreshPosition(x);
        }
    }

    function refreshPosition(cardIndex){
        moveCard(cardIndex,allEntityCards[cardIndex]["base"]);
    }

    function refreshRotationAll(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            refreshRotation(x);
        }
    }

    function refreshRotation(cardIndex){
        if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        else allEntityCards[cardIndex]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 0, 0);
    }

    function refreshClickCardsAll(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["clicked"]) refreshClickCards(x);
            else refreshPosition(x);
        }
    }

    function refreshClickCards(cardIndex){
        refreshPosition(cardIndex);
        var cardposition = allEntityCards[cardIndex]["entity"].getComponent(Transform).position;
        if(allEntityCards[cardIndex]["clicked"]) cardposition.set(cardposition.x,cardposition.y,cardposition.z - clickedliftsize);
    }

    /* #endregion */

    /* #region Game Logic */
    function clipToCardBase(cardbase,fromcard){
        /// --- Check if toCardBase is empty and if card to be place is king
        var data = [];
        data[cardbase + "index"] = -1;
        data[cardbase + "count"] = -1;

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["base"] == cardbase && allEntityCards[x]["basecount"] > data[allEntityCards[x]["base"]+"count"]){
                data[allEntityCards[x]["base"]+"index"] = x;
                data[allEntityCards[x]["base"]+"count"] = allEntityCards[x]["basecount"];
            }
        }

        var tocard;
        if (data[cardbase + "index"] == -1) tocard = "empty";
        else tocard = allEntityCards[data[cardbase + "index"]]["name"];

        if(tocard == "empty" && fromcard[0] == "k") return true;
        else if (tocard == "empty" && fromcard[0] != "k") return false;
        /// ---

        /// --- To extract the from and to card color and number
        var fromcardsuitcolor;
        var fromcardsuitnumber;
        var tocardsuitcolor;
        var tocardsuitnumber;

        if(fromcard[fromcard.length-1] == "d" || fromcard[fromcard.length-1] == "h") fromcardsuitcolor = "red";
        else fromcardsuitcolor = "black";

        if(tocard[tocard.length-1] == "d" || tocard[tocard.length-1] == "h") tocardsuitcolor = "red";
        else tocardsuitcolor = "black";

        if(fromcard.length == 3) fromcardsuitnumber = fromcard[0] + fromcard[1];
        else fromcardsuitnumber = fromcard[0];
        if(tocard.length == 3) tocardsuitnumber = tocard[0] + tocard[1];
        else tocardsuitnumber = tocard[0];

        for(var x = 0 ; x < suitCards.length ; x++ ){
            if(fromcardsuitnumber == suitCards[x]){
                fromcardsuitnumber = x;
                break;
            }
        }

        for(var y = 0 ; y < suitCards.length ; y++ ){
            if(tocardsuitnumber == suitCards[y]){
                tocardsuitnumber = y;
                break;
            }
        }
        /// ---

        /// --- Return true or false if card can be place on the selected base
        if(fromcardsuitcolor != tocardsuitcolor && fromcardsuitnumber + 1 == tocardsuitnumber){
            return true;
        }
        else{
            return false;
        }
        /// ---
    }

    function clipToDealBase(dealbase,fromcard){
        /// --- Check if toCardBase is empty and if card to be place is ace
        var data = [];
        data[dealbase + "index"] = -1;
        data[dealbase + "count"] = -1;

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["base"] == dealbase && allEntityCards[x]["basecount"] > data[allEntityCards[x]["base"]+"count"]){
                data[allEntityCards[x]["base"]+"index"] = x;
                data[allEntityCards[x]["base"]+"count"] = allEntityCards[x]["basecount"];
            }
        }

        var tocard;
        if (data[dealbase+"index"] == -1) tocard = "empty";
        else tocard = allEntityCards[data[dealbase+"index"]]["name"];

        if(tocard == "empty" && fromcard[0] == "a") return true;
        else if (tocard == "empty" && fromcard[0] != "a") return false;
        /// ---

        /// --- To extract the from and to card suit and number
        var fromcardsuit = fromcard[fromcard.length-1];
        var fromcardsuitnumber;
        var tocardsuit = tocard[tocard.length-1];
        var tocardsuitnumber;

        if(fromcard.length == 3) fromcardsuitnumber = fromcard[0] + fromcard[1];
        else fromcardsuitnumber = fromcard[0];
        if(tocard.length == 3) tocardsuitnumber = tocard[0] + tocard[1];
        else tocardsuitnumber = tocard[0];

        for(var x = 0 ; x < suitCards.length ; x++ ){
            if(fromcardsuitnumber == suitCards[x]){
                fromcardsuitnumber = x;
                break;
            }
        }

        for(var y = 0 ; y < suitCards.length ; y++ ){
            if(tocardsuitnumber == suitCards[y]){
                tocardsuitnumber = y;
                break;
            }
        }
        /// ---

        /// --- Return true or false if card can be place on the selected base
        if(fromcardsuit == tocardsuit && fromcardsuitnumber == tocardsuitnumber + 1){
            return true;
        }
        else{
            return false;
        }
        /// ---
    }

    function openTopCard(){
        var data = [];
        data["cardplaybase1index"] = -1;
        data["cardplaybase1count"] = -1;
        data["cardplaybase2index"] = -1;
        data["cardplaybase2count"] = -1;
        data["cardplaybase3index"] = -1;
        data["cardplaybase3count"] = -1;
        data["cardplaybase4index"] = -1;
        data["cardplaybase4count"] = -1;
        data["cardplaybase5index"] = -1;
        data["cardplaybase5count"] = -1;
        data["cardplaybase6index"] = -1;
        data["cardplaybase6count"] = -1;
        data["cardplaybase7index"] = -1;
        data["cardplaybase7count"] = -1;

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["basecount"] > data[allEntityCards[x]["base"]+"count"]){
                data[allEntityCards[x]["base"]+"index"] = x;
                data[allEntityCards[x]["base"]+"count"] = allEntityCards[x]["basecount"];
            }
        }

        if(data["cardplaybase1index"] != -1 && allEntityCards[data["cardplaybase1index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase1index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase1index"]);
            refreshRotation(data["cardplaybase1index"]);
        }
        if(data["cardplaybase2index"] != -1 && allEntityCards[data["cardplaybase2index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase2index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase2index"]);
            refreshRotation(data["cardplaybase2index"]);
        }
        if(data["cardplaybase3index"] != -1 && allEntityCards[data["cardplaybase3index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase3index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase3index"]);
            refreshRotation(data["cardplaybase3index"]);
        }
        if(data["cardplaybase4index"] != -1 && allEntityCards[data["cardplaybase4index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase4index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase4index"]);
            refreshRotation(data["cardplaybase4index"]);
        }
        if(data["cardplaybase5index"] != -1 && allEntityCards[data["cardplaybase5index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase5index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase5index"]);
            refreshRotation(data["cardplaybase5index"]);
        }
        if(data["cardplaybase6index"] != -1 && allEntityCards[data["cardplaybase6index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase6index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase6index"]);
            refreshRotation(data["cardplaybase6index"]);
        }
        if(data["cardplaybase7index"] != -1 && allEntityCards[data["cardplaybase7index"]]["facingfront"] == false){
            allEntityCards[data["cardplaybase7index"]]["facingfront"] = true;
            refreshPosition(data["cardplaybase7index"]);
            refreshRotation(data["cardplaybase7index"]);
        }
    }

    function setDraggable(){
        var data = [];
        data["pilebase1index"] = -1;
        data["pilebase1count"] = -1;
        data["pilebase2index"] = -1;
        data["pilebase2count"] = -1;
        data["dealbase1index"] = -1;
        data["dealbase1count"] = -1;
        data["dealbase2index"] = -1;
        data["dealbase2count"] = -1;
        data["dealbase3index"] = -1;
        data["dealbase3count"] = -1;
        data["dealbase4index"] = -1;
        data["dealbase4count"] = -1;

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["draggable"] = false;
            if(allEntityCards[x]["base"].includes("cardplaybase") && allEntityCards[x]["facingfront"]){
                allEntityCards[x]["draggable"] = true;
            }
            else if(allEntityCards[x]["basecount"] > data[allEntityCards[x]["base"]+"count"]){
                data[allEntityCards[x]["base"]+"index"] = x;
                data[allEntityCards[x]["base"]+"count"] = allEntityCards[x]["basecount"];
            }
        }

        if(data["pilebase1index"] != -1 && allEntityCards[data["pilebase1index"]]["draggable"] == false){
            allEntityCards[data["pilebase1index"]]["draggable"] = true;
        }
        if(data["pilebase2index"] != -1 && allEntityCards[data["pilebase2index"]]["draggable"] == false){
            allEntityCards[data["pilebase2index"]]["draggable"] = true;
        }
        if(data["dealbase1index"] != -1 && allEntityCards[data["dealbase1index"]]["draggable"] == false){
            allEntityCards[data["dealbase1index"]]["draggable"] = true;
        }
        if(data["dealbase2index"] != -1 && allEntityCards[data["dealbase2index"]]["draggable"] == false){
            allEntityCards[data["dealbase2index"]]["draggable"] = true;
        }
        if(data["dealbase3index"] != -1 && allEntityCards[data["dealbase3index"]]["draggable"] == false){
            allEntityCards[data["dealbase3index"]]["draggable"] = true;
        }
        if(data["dealbase4index"] != -1 && allEntityCards[data["dealbase4index"]]["draggable"] == false){
            allEntityCards[data["dealbase4index"]]["draggable"] = true;
        }

    }

    function isSomethingClicked(){
        for(var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["clicked"]) return true;
        }

        return false;
    }
    /* #endregion */

    /* #region Game Functions */
    function drawPile(){
        var pilebase1count = 0;
        for(var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["base"] == "pilebase1") pilebase1count++;
        }

        if(pilebase1count > 0){
            // movecard to pilebase2
            var pilebase1index = -1;
            var pilebase1count = -1;

            for(var x = 0 ; x < allEntityCards.length ; x++ ){
                if(allEntityCards[x]["base"] == "pilebase1" && allEntityCards[x]["basecount"] > pilebase1count){
                    pilebase1index = x;
                    pilebase1count = allEntityCards[x]["basecount"];
                }
            }

            if(pilebase1index != -1){
                for(var x = 0 ; x < allEntityCards.length ; x++ ){
                    if(allEntityCards[x]["base"] == "pilebase2") allEntityCards[x]["draggable"] = false;
                }

                allEntityCards[pilebase1index]["facingfront"] = true;
                allEntityCards[pilebase1index]["draggable"] = true;
                moveCard(pilebase1index,"pilebase2");
                refreshRotation(pilebase1index);
            }
        }
        else{
            // draw all cards back to base
            var allpilebase2index = [];

            for(var x = 0 ; x < allEntityCards.length ; x++ ){
                if(allEntityCards[x]["base"] == "pilebase2") allpilebase2index.push(x);
            }

            for(var x = 0 ; x < allpilebase2index.length ; x++ ){
                for(var y = 0 ; y < allpilebase2index.length - 1 ; y++ ){
                    if(allEntityCards[allpilebase2index[y]]["basecount"] > allEntityCards[allpilebase2index[y+1]]["basecount"]){
                        var tempvar = allpilebase2index[y];
                        allpilebase2index[y]= allpilebase2index[y+1];
                        allpilebase2index[y+1] = tempvar;
                    }
                }
            }

            for(var x = allpilebase2index.length - 1 ; x >= 0 ; x-- ){
                allEntityCards[allpilebase2index[x]]["facingfront"] = false;
                refreshRotation(allpilebase2index[x]);
                moveCard(allpilebase2index[x],"pilebase1");
            }
        }
    }

    function cardclick(cardname){
        if(!isSomethingClicked()){
            click1(cardname);
        }
        else{
            click2(cardname);
        }
    }

    function startGame(){
        for( var y = allEntityCards.length - 1 ; y >= allEntityCards.length - 29 ; y-- ){
            if(y == 51){
                moveCard(y,"cardplaybase1");
            }
            else if(y >= 49 && y <= 50){
                moveCard(y,"cardplaybase2");
            }
            else if(y >= 46 && y <= 48){
                moveCard(y,"cardplaybase3");
            }
            else if(y >= 42 && y <= 45){
                moveCard(y,"cardplaybase4");
            }
            else if(y >= 37 && y <= 41){
                moveCard(y,"cardplaybase5");
            }
            else if(y >= 31 && y <= 36){
                moveCard(y,"cardplaybase6");
            }
            else if(y >= 24 && y <= 30){
                moveCard(y,"cardplaybase7");
            }
        }
        openTopCard();
        setDraggable();
    }

    function click1(cardname){
        var cardIndex = 0;
        for( var x = 0 ; x < allEntityCards.length && !cardname.includes("bg") ; x++ ){
            if(allEntityCards[x]["name"] == cardname){
                cardIndex = x;
                break;
            }
        }

        if(cardname.includes("bg")){
            if(cardname.includes("pilebase1")){
                /// Reset pilebase1 return all cards from pilebase2 to pilebase1
                drawPile();
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("cardplaybase")){
            if(allEntityCards[cardIndex]["draggable"]){
                for(var x = 0 ; x < allEntityCards.length ; x++ ){
                    if(allEntityCards[x]["basecount"] >= allEntityCards[cardIndex]["basecount"] && allEntityCards[x]["base"] == allEntityCards[cardIndex]["base"]){
                        allEntityCards[x]["clicked"] = true;
                    }
                }
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("dealbase")){
            if(allEntityCards[cardIndex]["draggable"]){
                allEntityCards[cardIndex]["clicked"] = true;
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("pilebase")){
            if(allEntityCards[cardIndex]["base"] == "pilebase2" && allEntityCards[cardIndex]["draggable"]){
                allEntityCards[cardIndex]["clicked"] = true;
            }
            else if(allEntityCards[cardIndex]["base"] == "pilebase1"){
                //Open pilebase1 to pilebase2 here
                drawPile();
            }
        }

        if(isSomethingClicked()) refreshClickCardsAll();
    }

    function click2(cardname){
        var cardIndex = 0;
        var somethingismoved = false;
        for( var x = 0 ; x < allEntityCards.length && !cardname.includes("bg") ; x++ ){
            if(allEntityCards[x]["name"] == cardname){
                cardIndex = x;
                break;
            }
        }

        var clickedIndex = [];

        for (var x = 0 ; x < allEntityCards.length; x++ ){
            if(allEntityCards[x]["clicked"]) clickedIndex.push(x);
        }

        for (var x = 0 ; x < clickedIndex.length ; x++ ){
            for(var y = 0 ; y < clickedIndex.length - 1 ; y++ ){
                if(allEntityCards[clickedIndex[y]]["basecount"] > (allEntityCards[clickedIndex[y + 1]]["basecount"])){
                    var tempvar = clickedIndex[y];
                    clickedIndex[y] = clickedIndex[y + 1];
                    clickedIndex[y+1] = tempvar;
                }
            }
        }

        if(cardname.includes("bg")){
            if(cardname.includes("cardplaybase")){
                if(cardname.substring(0,13) != allEntityCards[clickedIndex[0]]["base"] && clipToCardBase(cardname.substring(0,13),allEntityCards[clickedIndex[0]]["name"])){
                    for (var x = 0 ; x < clickedIndex.length ; x++ ){
                        moveCardAnimated(clickedIndex[x],cardname.substring(0,13));
                        openTopCard();
                        setDraggable();
                        somethingismoved = true;
                    }
                }
            }
            else if(cardname.includes("dealbase")){
                if(cardname.substring(0,9) != allEntityCards[clickedIndex[0]]["base"] && clickedIndex.length == 1 && clipToDealBase(cardname.substring(0,9),allEntityCards[clickedIndex[0]]["name"])){
                    moveCardAnimated(clickedIndex[0],cardname.substring(0,9));
                    openTopCard();
                    setDraggable();
                    somethingismoved = true;
                }
            }
            else if(cardname.includes("pilebase")){
                /// Reset pilebase1 return all cards from pilebase2 to pilebase1
                drawPile();
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("cardplaybase")){
            if(allEntityCards[cardIndex]["base"] != allEntityCards[clickedIndex[0]]["base"] && clipToCardBase(allEntityCards[cardIndex]["base"],allEntityCards[clickedIndex[0]]["name"])){
                for (var x = 0 ; x < clickedIndex.length ; x++ ){
                    moveCardAnimated(clickedIndex[x],allEntityCards[cardIndex]["base"]);
                    openTopCard();
                    setDraggable();
                    somethingismoved = true;
                }
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("dealbase")){
            if(allEntityCards[cardIndex]["base"] != allEntityCards[clickedIndex[0]]["base"] && clickedIndex.length == 1 && clipToDealBase(allEntityCards[cardIndex]["base"],allEntityCards[clickedIndex[0]]["name"])){
                moveCardAnimated(clickedIndex[0],allEntityCards[cardIndex]["base"]);
                openTopCard();
                setDraggable();
                somethingismoved = true;
            }
        }
        else if(allEntityCards[cardIndex]["base"].includes("pilebase")){
            if(allEntityCards[cardIndex]["base"] == "pilebase1"){
                //Open pilebase1 here
                drawPile();
            }
        }

        for (var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["clicked"] = false;
        }

        if(!somethingismoved) refreshClickCardsAll();
        winGame();
    }
    /* #endregion */

    /* #region Pedestal Button */
    const buttonbase = new Entity();
    buttonbase.addComponent(new GLTFShape("models/buttonbase.glb"));
    buttonbase.addComponent(new Transform());
    buttonbase.getComponent(Transform).scale.set(0.8, 0.8, 0.8);
    buttonbase.getComponent(Transform).position.set(6, 0.1, 5);
    engine.addEntity(buttonbase);

    const button = new Entity();
    button.addComponent(new GLTFShape("models/button.gltf"));
    button.addComponent(new Transform());
    button.getComponent(Transform).scale.set(0.8, 0.8, 0.8);
    button.getComponent(Transform).position.set(6, 0.1, 5);
    button.addComponent(new OnClick(event =>{
        buttonclick();
    }));
    engine.addEntity(button);

    var buttonpressed = false;
    function buttonclick(){
        if(!buttonpressed){
            buttonpressed = true;
            newGame();
            startGame();
            winGame();
            setTimeout(buttonreset, 500);
            var buttonp = button.getComponent(Transform).position;
            buttonp.set(buttonp.x, buttonp.y - 0.03, buttonp.z);
        }
    }

    function buttonreset(){
        if(buttonpressed){
            buttonpressed = false;
            var buttonp = button.getComponent(Transform).position;
            buttonp.set(buttonp.x, buttonp.y + 0.03, buttonp.z);
        }
    }
    /* #endregion */

    /* #region Win Function */
    const myEntity = new Entity();
    const myText = new TextShape("CONGRATULATIONS!");
    myText.fontSize = 6;
    myEntity.addComponent(myText);
    myEntity.addComponent(new Transform());
    myEntity.getComponent(Transform).scale.set(0, 0, 0);
    myEntity.getComponent(Transform).position.set(8.5, 2.8, 6);
    engine.addEntity(myEntity);

    function winGame(){
        var dealbasetotalcount = 0;

        for(var x = 0; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["base"].includes("dealbase")) dealbasetotalcount++;
        }

        if(dealbasetotalcount == 52) myEntity.getComponent(Transform).scale.set(1, 1, 1);
        else myEntity.getComponent(Transform).scale.set(0, 0, 0);
    }
    /* #endregion */

    /* #region Addition Collision */
    const cardcollision = new Entity();
    cardcollision.addComponent(new GLTFShape("models/cardboxcollision.glb"));
    cardcollision.addComponent(new Transform());
    cardcollision.getComponent(Transform).scale.set(0.3, 1, 0.8);
    cardcollision.getComponent(Transform).rotation.setEuler(0, 90, 0);
    cardcollision.getComponent(Transform).position.set(8.6, 1.5, 6);
    engine.addEntity(cardcollision);
    /* #endregion */
    initialLoad();
    newGame();
    startGame();
}

