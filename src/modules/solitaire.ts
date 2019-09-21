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
    spacingZ = 0.1;


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

    // Using loop to render all 52 cards causes a freeze up
    function loadAllCards(){
        for( var x = 0 ; x < allEntityCards.length ; x++ ){
            allEntityCards[x]["entity"].addComponent(new GLTFShape("models/cards/"+allEntityCards[x]["name"]+".gltf"));
            allEntityCards[x]["entity"].addComponent(new Transform());
            allEntityCards[x]["entity"].getComponent(Transform).scale.set(cardScale, cardScale, cardScale);
            allEntityCards[x]["entity"].getComponent(Transform).position.set(solitairePositionX, solitairePositionY + (spacingY * (x+1)), solitairePositionZ);
            allEntityCards[x]["entity"].getComponent(Transform).rotation.setEuler(solitaireRotationX, 0, 0);
            var tempname = allEntityCards[x]["name"];
            allEntityCards[x]["entity"].addComponent(new OnClick(event =>{
                cardclick(tempname);
            }));
        }

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
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft1 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop1);
            allEntityCards[x]["base"] = "pilebase1";
        }
        else if(base == "pilebase2" && allEntityCards[cardIndex]["base"] != "pilebase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "pilebase2"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(pilebaseleft2 + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), pilebasetop2);
            allEntityCards[x]["base"] = "pilebase2";
        }
        else if(base == "dealbase1" && allEntityCards[cardIndex]["base"] != "dealbase1"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase1"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[x]["base"] = "dealbase1";
        }
        else if(base == "dealbase2" && allEntityCards[cardIndex]["base"] != "dealbase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase2"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[x]["base"] = "dealbase2";
        }
        else if(base == "dealbase3" && allEntityCards[cardIndex]["base"] != "dealbase3"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase3"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[x]["base"] = "dealbase3";
        }
        else if(base == "dealbase4" && allEntityCards[cardIndex]["base"] != "dealbase4"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "dealbase4"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(dealbaseleft["dealbase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), dealbasetop);
            allEntityCards[x]["base"] = "dealbase4";
        }
        else if(base == "cardplaybase1" && allEntityCards[cardIndex]["base"] != "cardplaybase1"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase1"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase1"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase1";
        }
        else if(base == "cardplaybase2" && allEntityCards[cardIndex]["base"] != "cardplaybase2"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase2"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase2"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase2";
        }
        else if(base == "cardplaybase3" && allEntityCards[cardIndex]["base"] != "cardplaybase3"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase3"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase3"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase3";
        }
        else if(base == "cardplaybase4" && allEntityCards[cardIndex]["base"] != "cardplaybase4"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase4"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase4"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase4";
        }
        else if(base == "cardplaybase5" && allEntityCards[cardIndex]["base"] != "cardplaybase5"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase5"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase5"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase5";
        }
        else if(base == "cardplaybase6" && allEntityCards[cardIndex]["base"] != "cardplaybase6"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase6"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase6"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase6";
        }
        else if(base == "cardplaybase7" && allEntityCards[cardIndex]["base"] != "cardplaybase7"){
            var lengthofbase = 0;
            for(var x = allEntityCards.length - 1 ; x >= 0 ; x-- ){
                if(allEntityCards[x]["base"] == "cardplaybase7"){
                    lengthofbase = allEntityCards[x]["basecount"] + 1;
                    break;
                }
            }

            allEntityCards[cardIndex]["entity"].getComponent(Transform).position.set(cardbaseleft["cardplaybase7"] + (cardOriginalSize * cardScale), solitairePositionY + (spacingY * (lengthofbase+1)), cardbasetop + (spacingZ * (lengthofbase+1)));
            allEntityCards[x]["base"] = "cardplaybase7";
        }
    }

    prepareAllCards();
    loadAllCards();
    loadCardBases();
}

