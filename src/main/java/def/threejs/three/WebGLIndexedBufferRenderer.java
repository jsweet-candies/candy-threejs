package def.threejs.three;
import def.dom.WebGLRenderingContext;
public class WebGLIndexedBufferRenderer extends def.js.Object {
    public WebGLIndexedBufferRenderer(WebGLRenderingContext gl, Object properties, Object info){}
    native public void setMode(Object value);
    native public void setIndex(Object index);
    native public void render(Object start, double count);
    native public void renderInstances(Object geometry, Object start, double count);
    protected WebGLIndexedBufferRenderer(){}
}

