package def.threejs.THREE;
import def.js.Function;
public class WebGLDepthBuffer extends def.js.Object {
    public WebGLDepthBuffer(Object gl, Object state){}
    native public void setTest(Boolean depthTest);
    native public void sertMask(double depthMask);
    native public void setFunc(Function depthFunc);
    native public void setLocked(Boolean lock);
    native public void setClear(Object depth);
    native public void reset();
    protected WebGLDepthBuffer(){}
}

