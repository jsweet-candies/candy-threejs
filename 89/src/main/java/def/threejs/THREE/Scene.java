package def.threejs.THREE;
/**
 * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
 */
public class Scene extends Object3D {
    public Scene(){}
    /**
     * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
     */
    public IFog fog;
    /**
     * If not null, it will force everything in the scene to be rendered with that material. Default is null.
     */
    public Material overrideMaterial;
    public Boolean autoUpdate;
    public Object background;
    native public Object toJSON(Object meta);
    native public Object toJSON();
}

