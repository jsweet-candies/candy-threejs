package def.threejs.THREE;
import def.js.Function;
public class WebGLStencilBuffer extends def.js.Object {
    public WebGLStencilBuffer(Object gl, Object state){}
    native public void setTest(Boolean stencilTest);
    native public void sertMask(double stencilMask);
    native public void setFunc(Function stencilFunc, Object stencilRef, double stencilMask);
    native public void setOp(Object stencilFail, Object stencilZFail, Object stencilZPass);
    native public void setLocked(Boolean lock);
    native public void setClear(Object stencil);
    native public void reset();
    protected WebGLStencilBuffer(){}
}

