package def.threejs.THREE;
public class MaskPass extends def.js.Object {
    public MaskPass(Scene scene, Camera camera){}
    public Scene scene;
    public Camera camera;
    public Boolean enabled;
    public Boolean clear;
    public Boolean needsSwap;
    public Boolean inverse;
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta);
    protected MaskPass(){}
}

