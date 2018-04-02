package def.threejs.THREE;
public class Pass extends def.js.Object {
    public Boolean enabled;
    public Boolean needsSwap;
    public Boolean clear;
    public Boolean renderToScreen;
    native public void setSize(double width, double height);
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta, Boolean maskActive);
    native public void render(WebGLRenderer renderer, WebGLRenderTarget writeBuffer, WebGLRenderTarget readBuffer, double delta);
}

