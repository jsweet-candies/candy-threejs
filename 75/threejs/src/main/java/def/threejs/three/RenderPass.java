package def.threejs.three;
public class RenderPass extends def.js.Object {
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, Color clearColor, double clearAlpha){}
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, String clearColor, double clearAlpha){}
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, double clearColor, double clearAlpha){}
    public Scene scene;
    public Camera camera;
    public Material overrideMaterial;
    public Object clearColor;
    public double clearAlpha;
    public Color oldClearColor;
    public double oldClearAlpha;
    public Boolean enabled;
    public Boolean clear;
    public Boolean needsSwap;
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta);
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, Color clearColor){}
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial){}
    public RenderPass(Scene scene, Camera camera){}
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, String clearColor){}
    public RenderPass(Scene scene, Camera camera, Material overrideMaterial, double clearColor){}
    protected RenderPass(){}
}

