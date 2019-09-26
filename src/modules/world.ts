export function World() : void{
    const platform = new Entity();
    platform.addComponent(new GLTFShape("models/platform.gltf"));
    platform.addComponent(new Transform());
    platform.getComponent(Transform).scale.set(1, 1, 1);
    platform.getComponent(Transform).position.set(0, 0, 0);
    engine.addEntity(platform);
}