package def.threejs.three;
public class ShaderPass extends def.js.Object {
    public ShaderPass(Shader shader, String textureID){}
    public String textureID;
    public Object uniforms;
    public ShaderMaterial material;
    public Boolean renderToScreen;
    public Boolean enabled;
    public Boolean needsSwap;
    public Boolean clear;
    public Camera camera;
    public Scene scene;
    public Mesh quad;
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta);
    public ShaderPass(Shader shader){}
    protected ShaderPass(){}
}

