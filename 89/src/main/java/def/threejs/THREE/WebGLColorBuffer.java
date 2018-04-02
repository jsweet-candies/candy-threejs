package def.threejs.THREE;
public class WebGLColorBuffer extends def.js.Object {
    public WebGLColorBuffer(Object gl, Object state){}
    native public void setMask(double colorMask);
    native public void setLocked(Boolean lock);
    native public void setClear(double r, double g, double b, double a);
    native public void reset();
    protected WebGLColorBuffer(){}
}

