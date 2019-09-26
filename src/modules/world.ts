export function World() : void{
    const platform = new Entity();
    platform.addComponent(new GLTFShape("models/platform.gltf"));
    platform.addComponent(new Transform());
    platform.getComponent(Transform).scale.set(1, 1, 1);
    platform.getComponent(Transform).position.set(0, 0, 0);
    engine.addEntity(platform);

    /* #region Fence */
    const fencecurve = new Entity();
    fencecurve.addComponent(new GLTFShape("models/world/Prop_Fence_Curve_2x2.gltf"));
    fencecurve.addComponent(new Transform());
    fencecurve.getComponent(Transform).scale.set(1, 1, 1);
    fencecurve.getComponent(Transform).position.set(1.7, 0, 14.3);
    fencecurve.getComponent(Transform).rotation.setEuler(0,270,0);
    engine.addEntity(fencecurve);

    /* #region Along z */
    const fencepost1 = new Entity();
    fencepost1.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost1.addComponent(new Transform());
    fencepost1.getComponent(Transform).scale.set(1, 1, 1);
    fencepost1.getComponent(Transform).position.set(-0.3, 0, 13.22);
    fencepost1.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost1);

    const fenceboard1 = new Entity();
    fenceboard1.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard1.addComponent(new Transform());
    fenceboard1.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard1.getComponent(Transform).position.set(-0.3, 0, 13.22);
    fenceboard1.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard1);

    const fencepost2 = new Entity();
    fencepost2.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost2.addComponent(new Transform());
    fencepost2.getComponent(Transform).scale.set(1, 1, 1);
    fencepost2.getComponent(Transform).position.set(-0.3, 0, 12.22);
    fencepost2.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost2);

    const fenceboard2 = new Entity();
    fenceboard2.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard2.addComponent(new Transform());
    fenceboard2.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard2.getComponent(Transform).position.set(-0.3, 0, 12.22);
    fenceboard2.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard2);

    const fencepost3 = new Entity();
    fencepost3.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost3.addComponent(new Transform());
    fencepost3.getComponent(Transform).scale.set(1, 1, 1);
    fencepost3.getComponent(Transform).position.set(-0.3, 0, 11.22);
    fencepost3.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost3);

    const fenceboard3 = new Entity();
    fenceboard3.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard3.addComponent(new Transform());
    fenceboard3.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard3.getComponent(Transform).position.set(-0.3, 0, 11.22);
    fenceboard3.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard3);

    const fencepost4 = new Entity();
    fencepost4.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost4.addComponent(new Transform());
    fencepost4.getComponent(Transform).scale.set(1, 1, 1);
    fencepost4.getComponent(Transform).position.set(-0.3, 0, 10.22);
    fencepost4.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost4);

    const fenceboard4 = new Entity();
    fenceboard4.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard4.addComponent(new Transform());
    fenceboard4.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard4.getComponent(Transform).position.set(-0.3, 0, 10.22);
    fenceboard4.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard4);

    const fencepost5 = new Entity();
    fencepost5.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost5.addComponent(new Transform());
    fencepost5.getComponent(Transform).scale.set(1, 1, 1);
    fencepost5.getComponent(Transform).position.set(-0.3, 0, 9.22);
    fencepost5.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost5);

    const fenceboard5 = new Entity();
    fenceboard5.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard5.addComponent(new Transform());
    fenceboard5.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard5.getComponent(Transform).position.set(-0.3, 0, 9.22);
    fenceboard5.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard5);

    const fencepost6 = new Entity();
    fencepost6.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost6.addComponent(new Transform());
    fencepost6.getComponent(Transform).scale.set(1, 1, 1);
    fencepost6.getComponent(Transform).position.set(-0.3, 0, 8.22);
    fencepost6.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost6);

    const fenceboard6 = new Entity();
    fenceboard6.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard6.addComponent(new Transform());
    fenceboard6.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard6.getComponent(Transform).position.set(-0.3, 0, 8.22);
    fenceboard6.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard6);

    const fencepost7 = new Entity();
    fencepost7.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost7.addComponent(new Transform());
    fencepost7.getComponent(Transform).scale.set(1, 1, 1);
    fencepost7.getComponent(Transform).position.set(-0.3, 0, 7.22);
    fencepost7.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost7);

    const fenceboard7 = new Entity();
    fenceboard7.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard7.addComponent(new Transform());
    fenceboard7.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard7.getComponent(Transform).position.set(-0.3, 0, 7.22);
    fenceboard7.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard7);

    const fencepost8 = new Entity();
    fencepost8.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost8.addComponent(new Transform());
    fencepost8.getComponent(Transform).scale.set(1, 1, 1);
    fencepost8.getComponent(Transform).position.set(-0.3, 0, 6.22);
    fencepost8.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost8);

    const fenceboard8 = new Entity();
    fenceboard8.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard8.addComponent(new Transform());
    fenceboard8.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard8.getComponent(Transform).position.set(-0.3, 0, 6.22);
    fenceboard8.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard8);

    const fencepost9 = new Entity();
    fencepost9.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost9.addComponent(new Transform());
    fencepost9.getComponent(Transform).scale.set(1, 1, 1);
    fencepost9.getComponent(Transform).position.set(-0.3, 0, 5.22);
    fencepost9.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost9);

    const fenceboard9 = new Entity();
    fenceboard9.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard9.addComponent(new Transform());
    fenceboard9.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard9.getComponent(Transform).position.set(-0.3, 0, 5.22);
    fenceboard9.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard9);

    const fencepost10 = new Entity();
    fencepost10.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost10.addComponent(new Transform());
    fencepost10.getComponent(Transform).scale.set(1, 1, 1);
    fencepost10.getComponent(Transform).position.set(-0.3, 0, 4.22);
    fencepost10.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost10);

    const fenceboard10 = new Entity();
    fenceboard10.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard10.addComponent(new Transform());
    fenceboard10.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard10.getComponent(Transform).position.set(-0.3, 0, 4.22);
    fenceboard10.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard10);

    const fencepost11 = new Entity();
    fencepost11.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost11.addComponent(new Transform());
    fencepost11.getComponent(Transform).scale.set(1, 1, 1);
    fencepost11.getComponent(Transform).position.set(-0.3, 0, 3.22);
    fencepost11.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost11);

    const fenceboard11 = new Entity();
    fenceboard11.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard11.addComponent(new Transform());
    fenceboard11.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard11.getComponent(Transform).position.set(-0.3, 0, 3.22);
    fenceboard11.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard11);

    const fencepost12 = new Entity();
    fencepost12.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost12.addComponent(new Transform());
    fencepost12.getComponent(Transform).scale.set(1, 1, 1);
    fencepost12.getComponent(Transform).position.set(-0.3, 0, 2.22);
    fencepost12.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost12);

    const fenceboard12 = new Entity();
    fenceboard12.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard12.addComponent(new Transform());
    fenceboard12.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard12.getComponent(Transform).position.set(-0.3, 0, 2.22);
    fenceboard12.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard12);

    const fencepost26 = new Entity();
    fencepost26.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost26.addComponent(new Transform());
    fencepost26.getComponent(Transform).scale.set(1, 1, 1);
    fencepost26.getComponent(Transform).position.set(-0.3, 0, 1.22);
    fencepost26.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fencepost26);

    const fenceboard26 = new Entity();
    fenceboard26.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard26.addComponent(new Transform());
    fenceboard26.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard26.getComponent(Transform).position.set(-0.3, 0, 1.22);
    fenceboard26.getComponent(Transform).rotation.setEuler(0,90,0);
    engine.addEntity(fenceboard26);

    /* #endregion */
    /* #region Along y */

    const fencepost13 = new Entity();
    fencepost13.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost13.addComponent(new Transform());
    fencepost13.getComponent(Transform).scale.set(1, 1, 1);
    fencepost13.getComponent(Transform).position.set(2.8, 0, 15.3);
    fencepost13.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost13);

    const fenceboard13 = new Entity();
    fenceboard13.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard13.addComponent(new Transform());
    fenceboard13.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard13.getComponent(Transform).position.set(2.8, 0, 15.3);
    fenceboard13.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard13);

    const fencepost14 = new Entity();
    fencepost14.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost14.addComponent(new Transform());
    fencepost14.getComponent(Transform).scale.set(1, 1, 1);
    fencepost14.getComponent(Transform).position.set(3.8, 0, 15.3);
    fencepost14.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost14);

    const fenceboard14 = new Entity();
    fenceboard14.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard14.addComponent(new Transform());
    fenceboard14.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard14.getComponent(Transform).position.set(3.8, 0, 15.3);
    fenceboard14.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard14);

    const fencepost15 = new Entity();
    fencepost15.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost15.addComponent(new Transform());
    fencepost15.getComponent(Transform).scale.set(1, 1, 1);
    fencepost15.getComponent(Transform).position.set(4.8, 0, 15.3);
    fencepost15.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost15);

    const fenceboard15 = new Entity();
    fenceboard15.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard15.addComponent(new Transform());
    fenceboard15.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard15.getComponent(Transform).position.set(4.8, 0, 15.3);
    fenceboard15.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard15);

    const fencepost16 = new Entity();
    fencepost16.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost16.addComponent(new Transform());
    fencepost16.getComponent(Transform).scale.set(1, 1, 1);
    fencepost16.getComponent(Transform).position.set(5.8, 0, 15.3);
    fencepost16.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost16);

    const fenceboard16 = new Entity();
    fenceboard16.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard16.addComponent(new Transform());
    fenceboard16.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard16.getComponent(Transform).position.set(5.8, 0, 15.3);
    fenceboard16.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard16);

    const fencepost17 = new Entity();
    fencepost17.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost17.addComponent(new Transform());
    fencepost17.getComponent(Transform).scale.set(1, 1, 1);
    fencepost17.getComponent(Transform).position.set(6.8, 0, 15.3);
    fencepost17.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost17);

    const fenceboard17 = new Entity();
    fenceboard17.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard17.addComponent(new Transform());
    fenceboard17.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard17.getComponent(Transform).position.set(6.8, 0, 15.3);
    fenceboard17.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard17);

    const fencepost18 = new Entity();
    fencepost18.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost18.addComponent(new Transform());
    fencepost18.getComponent(Transform).scale.set(1, 1, 1);
    fencepost18.getComponent(Transform).position.set(7.8, 0, 15.3);
    fencepost18.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost18);

    const fenceboard18 = new Entity();
    fenceboard18.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard18.addComponent(new Transform());
    fenceboard18.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard18.getComponent(Transform).position.set(7.8, 0, 15.3);
    fenceboard18.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard18);

    const fencepost19 = new Entity();
    fencepost19.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost19.addComponent(new Transform());
    fencepost19.getComponent(Transform).scale.set(1, 1, 1);
    fencepost19.getComponent(Transform).position.set(8.8, 0, 15.3);
    fencepost19.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost19);

    const fenceboard19 = new Entity();
    fenceboard19.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard19.addComponent(new Transform());
    fenceboard19.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard19.getComponent(Transform).position.set(8.8, 0, 15.3);
    fenceboard19.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard19);

    const fencepost20 = new Entity();
    fencepost20.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost20.addComponent(new Transform());
    fencepost20.getComponent(Transform).scale.set(1, 1, 1);
    fencepost20.getComponent(Transform).position.set(9.8, 0, 15.3);
    fencepost20.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost20);

    const fenceboard20 = new Entity();
    fenceboard20.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard20.addComponent(new Transform());
    fenceboard20.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard20.getComponent(Transform).position.set(9.8, 0, 15.3);
    fenceboard20.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard20);

    const fencepost21 = new Entity();
    fencepost21.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost21.addComponent(new Transform());
    fencepost21.getComponent(Transform).scale.set(1, 1, 1);
    fencepost21.getComponent(Transform).position.set(10.8, 0, 15.3);
    fencepost21.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost21);

    const fenceboard21 = new Entity();
    fenceboard21.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard21.addComponent(new Transform());
    fenceboard21.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard21.getComponent(Transform).position.set(10.8, 0, 15.3);
    fenceboard21.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard21);

    const fencepost22 = new Entity();
    fencepost22.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost22.addComponent(new Transform());
    fencepost22.getComponent(Transform).scale.set(1, 1, 1);
    fencepost22.getComponent(Transform).position.set(11.8, 0, 15.3);
    fencepost22.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost22);

    const fenceboard22 = new Entity();
    fenceboard22.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard22.addComponent(new Transform());
    fenceboard22.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard22.getComponent(Transform).position.set(11.8, 0, 15.3);
    fenceboard22.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard22);

    const fencepost23 = new Entity();
    fencepost23.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost23.addComponent(new Transform());
    fencepost23.getComponent(Transform).scale.set(1, 1, 1);
    fencepost23.getComponent(Transform).position.set(12.8, 0, 15.3);
    fencepost23.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost23);

    const fenceboard23 = new Entity();
    fenceboard23.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard23.addComponent(new Transform());
    fenceboard23.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard23.getComponent(Transform).position.set(12.8, 0, 15.3);
    fenceboard23.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard23);

    const fencepost24 = new Entity();
    fencepost24.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost24.addComponent(new Transform());
    fencepost24.getComponent(Transform).scale.set(1, 1, 1);
    fencepost24.getComponent(Transform).position.set(13.8, 0, 15.3);
    fencepost24.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost24);

    const fenceboard24 = new Entity();
    fenceboard24.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard24.addComponent(new Transform());
    fenceboard24.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard24.getComponent(Transform).position.set(13.8, 0, 15.3);
    fenceboard24.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard24);

    const fencepost25 = new Entity();
    fencepost25.addComponent(new GLTFShape("models/world/Prop_Fence_Post_1.gltf"));
    fencepost25.addComponent(new Transform());
    fencepost25.getComponent(Transform).scale.set(1, 1, 1);
    fencepost25.getComponent(Transform).position.set(14.8, 0, 15.3);
    fencepost25.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fencepost25);

    const fenceboard25 = new Entity();
    fenceboard25.addComponent(new GLTFShape("models/world/Prop_Fence_Boards_1.gltf"));
    fenceboard25.addComponent(new Transform());
    fenceboard25.getComponent(Transform).scale.set(1, 1, 1);
    fenceboard25.getComponent(Transform).position.set(14.8, 0, 15.3);
    fenceboard25.getComponent(Transform).rotation.setEuler(0,0,0);
    engine.addEntity(fenceboard25);

    /* #endregion */
    /* #endregion */


}