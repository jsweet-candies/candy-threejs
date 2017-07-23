package def.threejs.three;
public class LensFlarePlugin extends def.js.Object {
    public LensFlarePlugin(WebGLRenderer renderer, Object[] flares){}
    native public void render(Scene scene, Camera camera, double viewportWidth, double viewportHeight);
    protected LensFlarePlugin(){}
}

