export function SolitaireGame() : void{
    let solitairePositionX = 7.75;
    let solitairePositionY = 1;
    let solitairePositionZ = 6;

    let solitaireRotationX = 90;
    let solitaireRotationY = 0;
    let solitaireRotationZ = 0;

    let cardOriginalSize = 1.5;
    let cardScale = 0.15;

    var cardbasetop;
    var cardbaseleft = {};
    var dealbasetop;
    var dealbaseleft = {};
    var pilebasetop1;
    var pilebaseleft1;
    var pilebasetop2;
    var pilebaseleft2;
    var spacingY;
    var spacingZ;


    cardbasetop = solitairePositionZ - 0.5;
    cardbaseleft["cardplaybase1"] = solitairePositionX;
    cardbaseleft["cardplaybase2"] = solitairePositionX + 0.25;
    cardbaseleft["cardplaybase3"] = solitairePositionX + 0.5;
    cardbaseleft["cardplaybase4"] = solitairePositionX + 0.75;
    cardbaseleft["cardplaybase5"] = solitairePositionX + 1.0;
    cardbaseleft["cardplaybase6"] = solitairePositionX + 1.25;
    cardbaseleft["cardplaybase7"] = solitairePositionX + 1.50;
    dealbasetop = solitairePositionZ;
    dealbaseleft["dealbase1"] = cardbaseleft["cardplaybase4"];
    dealbaseleft["dealbase2"] = cardbaseleft["cardplaybase5"];
    dealbaseleft["dealbase3"] = cardbaseleft["cardplaybase6"];
    dealbaseleft["dealbase4"] = cardbaseleft["cardplaybase7"];
    pilebasetop1 = dealbasetop;
    pilebaseleft1 = cardbaseleft["cardplaybase1"] ;
    pilebasetop2 = dealbasetop;
    pilebaseleft2 = cardbaseleft["cardplaybase2"] ;
    spacingY = 0.001;
    spacingZ = 0.06;


    // Define all cards
    var allCards = ["ac","ad","ah","as","2c","2d","2h","2s","3c","3d","3h","3s","4c","4d","4h","4s","5c","5d","5h","6s","6c","6d","6h","6s","7c","7d","7h","7s","8c","8d","8h","8s","9c","9d","9h","9s","10c","10d","10h","10s","jc","jd","jh","js","qc","qd","qh","qs","kc","kd","kh","ks"];

    // Render all cards
    var allEntityCards = [];

    function prepareAllCards(){
        allEntityCards = [];

        for(var x = 0 ; x < allCards.length ; x++ ){
            allEntityCards[x] = [];
            allEntityCards[x]["name"] = allCards[x];
            allEntityCards[x]["entity"] = new Entity();
            allEntityCards[x]["base"] = "pilebase1";
            allEntityCards[x]["basecount"] = x;
            allEntityCards[x]["facingfront"] = false;
        }

        shuffle(allEntityCards);
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

    function loadAllCards(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["entity"].addComponent(new GLTFShape("models/cards/"+allEntityCards[x]["name"]+".gltf"));
            allEntityCards[x]["entity"].addComponent(new Transform());
            allEntityCards[x]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
            allEntityCards[x]["entity"].getComponent(Transform).position.set(solitairePositionX, solitairePositionY + (spacingY * (x+1)), solitairePositionZ);
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

    var allCardBack = [];
    function loadCardBases(){

        allCardBack["cardplaybase1"] = new Entity();
        allCardBack["cardplaybase1"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase1"].addComponent(new Transform());
        allCardBack["cardplaybase1"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase1"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase1"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase1"]);

        allCardBack["cardplaybase2"] = new Entity();
        allCardBack["cardplaybase2"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase2"].addComponent(new Transform());
        allCardBack["cardplaybase2"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase2"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase2"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase2"]);

        allCardBack["cardplaybase3"] = new Entity();
        allCardBack["cardplaybase3"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase3"].addComponent(new Transform());
        allCardBack["cardplaybase3"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase3"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase3"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase3"]);

        allCardBack["cardplaybase4"] = new Entity();
        allCardBack["cardplaybase4"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase4"].addComponent(new Transform());
        allCardBack["cardplaybase4"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase4"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase4"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase4"]);

        allCardBack["cardplaybase5"] = new Entity();
        allCardBack["cardplaybase5"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase5"].addComponent(new Transform());
        allCardBack["cardplaybase5"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase5"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase5"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase5"]);

        allCardBack["cardplaybase6"] = new Entity();
        allCardBack["cardplaybase6"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase6"].addComponent(new Transform());
        allCardBack["cardplaybase6"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase6"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase6"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase6"]);

        allCardBack["cardplaybase7"] = new Entity();
        allCardBack["cardplaybase7"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["cardplaybase7"].addComponent(new Transform());
        allCardBack["cardplaybase7"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["cardplaybase7"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"] + (cardOriginalSize * cardScale), solitairePositionY, cardbasetop);
        allCardBack["cardplaybase7"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["cardplaybase7"]);

        allCardBack["dealbase1"] = new Entity();
        allCardBack["dealbase1"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["dealbase1"].addComponent(new Transform());
        allCardBack["dealbase1"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["dealbase1"].getComponent(Transform).position.set(dealbaseleft["dealbase1"] + (cardOriginalSize * cardScale), solitairePositionY, dealbasetop);
        allCardBack["dealbase1"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["dealbase1"]);

        allCardBack["dealbase2"] = new Entity();
        allCardBack["dealbase2"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["dealbase2"].addComponent(new Transform());
        allCardBack["dealbase2"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["dealbase2"].getComponent(Transform).position.set(dealbaseleft["dealbase2"] + (cardOriginalSize * cardScale), solitairePositionY, dealbasetop);
        allCardBack["dealbase2"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["dealbase2"]);

        allCardBack["dealbase3"] = new Entity();
        allCardBack["dealbase3"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["dealbase3"].addComponent(new Transform());
        allCardBack["dealbase3"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["dealbase3"].getComponent(Transform).position.set(dealbaseleft["dealbase3"] + (cardOriginalSize * cardScale), solitairePositionY, dealbasetop);
        allCardBack["dealbase3"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["dealbase3"]);

        allCardBack["dealbase4"] = new Entity();
        allCardBack["dealbase4"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["dealbase4"].addComponent(new Transform());
        allCardBack["dealbase4"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["dealbase4"].getComponent(Transform).position.set(dealbaseleft["dealbase4"] + (cardOriginalSize * cardScale), solitairePositionY, dealbasetop);
        allCardBack["dealbase4"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["dealbase4"]);

        allCardBack["pilebase"] = new Entity();
        allCardBack["pilebase"].addComponent(new GLTFShape("models/cards/back.gltf"));
        allCardBack["pilebase"].addComponent(new Transform());
        allCardBack["pilebase"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
        allCardBack["pilebase"].getComponent(Transform).position.set(pilebaseleft1 + (cardOriginalSize * cardScale), solitairePositionY, pilebasetop1);
        allCardBack["pilebase"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 180, 0);
        engine.addEntity(allCardBack["pilebase"]);

    }

    var isPlaying = 0;

    function cardclick(cardname){
        var cardIndex = 0;
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            if(allEntityCards[x]["name"] == cardname){
                cardIndex = x;
                break;
            }
        }

        if(isPlaying == 0){
            isPlaying = -1;
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
            isPlaying = 1;
        }
        else if(isPlaying == 1){
            log(allEntityCards[x]["name"]);
        }
    }

    function refreshOrder(){
        var count = [];
        count["pilebase1"] = 0;
        count["pilebase2"] = 0;
        count["dealbase1"] = 0;
        count["dealbase2"] = 0;
        count["dealbase3"] = 0;
        count["dealbase4"] = 0;
        count["cardplaybase1"] = 0;
        count["cardplaybase2"] = 0;
        count["cardplaybase3"] = 0;
        count["cardplaybase4"] = 0;
        count["cardplaybase5"] = 0;
        count["cardplaybase6"] = 0;
        count["cardplaybase7"] = 0;

        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["basecount"] = count[allEntityCards[x]["base"]]++;
        }
    }

    function moveCard(cardIndex, base){
        if(base == "pilebase1" && allEntityCards[cardIndex]["base"] != "pilebase1"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "pilebase1"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft1 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop1);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft1, solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop1);
            allEntityCards[cardIndex]["base"] = "pilebase1";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "pilebase2" && allEntityCards[cardIndex]["base"] != "pilebase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "pilebase2"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft2 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop2);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft2, solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop2);
            allEntityCards[cardIndex]["base"] = "pilebase2";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "dealbase1" && allEntityCards[cardIndex]["base"] != "dealbase1"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase1"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase1"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[cardIndex]["base"] = "dealbase1";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "dealbase2" && allEntityCards[cardIndex]["base"] != "dealbase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase2"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase2"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[cardIndex]["base"] = "dealbase2";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "dealbase3" && allEntityCards[cardIndex]["base"] != "dealbase3"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase3"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase3"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[cardIndex]["base"] = "dealbase3";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "dealbase4" && allEntityCards[cardIndex]["base"] != "dealbase4"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase4"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase4"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[cardIndex]["base"] = "dealbase4";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase1" && allEntityCards[cardIndex]["base"] != "cardplaybase1"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase1"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase1";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase2" && allEntityCards[cardIndex]["base"] != "cardplaybase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase2"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase2";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase3" && allEntityCards[cardIndex]["base"] != "cardplaybase3"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase3"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase3";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase4" && allEntityCards[cardIndex]["base"] != "cardplaybase4"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase4"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase4";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase5" && allEntityCards[cardIndex]["base"] != "cardplaybase5"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase5"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase5";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase6" && allEntityCards[cardIndex]["base"] != "cardplaybase6"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase6"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase6";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
        else if(base == "cardplaybase7" && allEntityCards[cardIndex]["base"] != "cardplaybase7"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase7"){
                    if(allEntityCards[x]["basecount"] >= lengthofbase) lengthofbase = allEntityCards[x]["basecount"] + 1;
                }
            }

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            allEntityCards[cardIndex]["base"] = "cardplaybase7";
            allEntityCards[cardIndex]["basecount"] = lengthofbase;
        }
    }

    function refreshPositionAll(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            refreshPosition(x);
        }
    }

    function refreshPosition(cardIndex){
        if(allEntityCards[cardIndex]["base"] == "pilebase1"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft1 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop1);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft1, solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop1);
        }
        else if(allEntityCards[cardIndex]["base"] == "pilebase2"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft2 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop2);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft2, solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop2);
        }
        else if(allEntityCards[cardIndex]["base"] == "dealbase1"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase1"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
        }
        else if(allEntityCards[cardIndex]["base"] == "dealbase2"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase2"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
        }
        else if(allEntityCards[cardIndex]["base"] == "dealbase3"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase3"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
        }
        else if(allEntityCards[cardIndex]["base"] == "dealbase4"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase4"], solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase1"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase2"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase3"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase4"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];


            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase5"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] == "cardplaybase6"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
        else if(allEntityCards[cardIndex]["base"] != "cardplaybase7"){
            var lengthofbase = allEntityCards[cardIndex]["basecount"];

            if(allEntityCards[cardIndex]["facingfront"]) allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
            else allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"], solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop - (spacingZ * (lengthofbase)));
        }
    }

    prepareAllCards();
    loadAllCards();
    loadCardBases();
    refreshPositionAll();
}

