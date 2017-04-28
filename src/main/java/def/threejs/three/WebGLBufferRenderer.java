package def.threejs.three;
import def.dom.WebGLRenderingContext;
public class WebGLBufferRenderer extends def.js.Object {
    public WebGLBufferRenderer(WebGLRenderingContext _gl, Object extensions, Object _infoRender){}
    native public void setMode(Object value);
    native public void render(Object start, Object count);
    native public void renderInstances(Object geometry);
    protected WebGLBufferRenderer(){}
}

