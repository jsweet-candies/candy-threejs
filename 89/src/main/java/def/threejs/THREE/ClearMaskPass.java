package def.threejs.THREE;
public class ClearMaskPass extends def.js.Object {
    public ClearMaskPass(){}
    public Boolean enabled;
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta);
}

