package def.threejs.three;

public class EffectComposer extends def.js.Object {
    public EffectComposer(WebGLRenderer renderer, WebGLRenderTarget renderTarget){}
    public WebGLRenderTarget renderTarget1;
    public WebGLRenderTarget renderTarget2;
    public WebGLRenderTarget writeBuffer;
    public WebGLRenderTarget readBuffer;
    public Object[] passes;
    public ShaderPass copyPass;
    native public void swapBuffers();
    native public void addPass(Object pass);
    native public void insertPass(Object pass, double index);
    native public void render(double delta);
    native public void reset(WebGLRenderTarget renderTarget);
    native public void setSize(double width, double height);
    public EffectComposer(WebGLRenderer renderer){}
    native public void render();
    native public void reset();
    protected EffectComposer(){}
}

