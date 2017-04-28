package def.threejs.three;
public class SpritePlugin extends def.js.Object {
    public SpritePlugin(WebGLRenderer renderer, Object[] sprites){}
    native public void render(Scene scene, Camera camera, double viewportWidth, double viewportHeight);
    protected SpritePlugin(){}
}

