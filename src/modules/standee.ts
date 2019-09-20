export function CreateStandee() : void{
    let standeePositionX = 9;
    let standeePositionY = 0;
    let standeePositionZ = 7.5;

    const table = new Entity();
    table.addComponent(new GLTFShape("models/table.gltf"));
    table.addComponent(new Transform());
    table.getComponent(Transform).scale.set(0.2, 0.2, 0.2);
    table.getComponent(Transform).position.set(standeePositionX, standeePositionY, standeePositionZ);
    engine.addEntity(table);

    const cardDisplay1 = new Entity();
    engine.addEntity(cardDisplay1);
    cardDisplay1.addComponent(new GLTFShape("models/cards/kc.gltf"));
    cardDisplay1.addComponent(new Transform());
    cardDisplay1.getComponent(Transform).scale.set(0.2, 0.2, 0.2);
    cardDisplay1.getComponent(Transform).position.set(standeePositionX - 1.2, standeePositionY + 1.85, standeePositionZ);
    cardDisplay1.getComponent(Transform).rotation.set(180, 0, 0, 0);

    const cardDisplay2 = new Entity();
    engine.addEntity(cardDisplay2);
    cardDisplay2.addComponent(new GLTFShape("models/cards/qd.gltf"));
    cardDisplay2.addComponent(new Transform());
    cardDisplay2.getComponent(Transform).scale.set(0.2, 0.2, 0.2);
    cardDisplay2.getComponent(Transform).position.set(standeePositionX - 0.8, standeePositionY + 1.85, standeePositionZ);
    cardDisplay2.getComponent(Transform).rotation.set(180, 0, 0, 0);

    const cardDisplay3 = new Entity();
    engine.addEntity(cardDisplay3);
    cardDisplay3.addComponent(new GLTFShape("models/cards/jh.gltf"));
    cardDisplay3.addComponent(new Transform());
    cardDisplay3.getComponent(Transform).scale.set(0.2, 0.2, 0.2);
    cardDisplay3.getComponent(Transform).position.set(standeePositionX - 0.4, standeePositionY + 1.85, standeePositionZ);
    cardDisplay3.getComponent(Transform).rotation.set(180, 0, 0, 0);

    const cardDisplay4 = new Entity();
    engine.addEntity(cardDisplay4);
    cardDisplay4.addComponent(new GLTFShape("models/cards/as.gltf"));
    cardDisplay4.addComponent(new Transform());
    cardDisplay4.getComponent(Transform).scale.set(0.2, 0.2, 0.2);
    cardDisplay4.getComponent(Transform).position.set(standeePositionX, standeePositionY + 1.85, standeePositionZ);
    cardDisplay4.getComponent(Transform).rotation.set(180, 0, 0, 0);

    const cryptosolitairelogo = new Entity();
    cryptosolitairelogo.addComponent(new GLTFShape("models/logo.gltf"));
    cryptosolitairelogo.addComponent(new Transform());
    cryptosolitairelogo.getComponent(Transform).position.set(standeePositionX - 0.4, standeePositionY + 2.5, standeePositionZ + 0.5);
    cryptosolitairelogo.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
    engine.addEntity(cryptosolitairelogo);
}