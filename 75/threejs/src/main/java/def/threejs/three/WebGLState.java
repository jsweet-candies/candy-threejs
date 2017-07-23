package def.threejs.three;
import def.js.Function;
public class WebGLState extends def.js.Object {
    public WebGLState(Object gl, Object extensions, Function paramThreeToGL){}
    native public void init();
    native public void initAttributes();
    native public void enableAttribute(String attribute);
    native public void enableAttributeAndDivisor(String attribute, Object meshPerAttribute, Object extension);
    native public void disableUnusedAttributes();
    native public void enable(String id);
    native public void disable(String id);
    native public Object[] getCompressedTextureFormats();
    native public void setBlending(double blending, double blendEquation, double blendSrc, double blendDst, double blendEquationAlpha, double blendSrcAlpha, double blendDstAlpha);
    native public void setDepthFunc(Function func);
    native public void setDepthTest(double depthTest);
    native public void setDepthWrite(double depthWrite);
    native public void setColorWrite(double colorWrite);
    native public void setStencilFunc(Function stencilFunc, Object stencilRef, Object stencilMask);
    native public void setStencilOp(Object stencilFail, Object stencilZFail, Object stencilZPass);
    native public void setStencilTest(Boolean stencilTest);
    native public void setStencilWrite(Object stencilWrite);
    native public void setFlipSided(double flipSided);
    native public void setLineWidth(double width);
    native public void setPolygonOffset(double polygonoffset, double factor, double units);
    native public void setScissorTest(Boolean scissorTest);
    native public Boolean getScissorTest();
    native public void activeTexture(Object webglSlot);
    native public void bindTexture(Object webglType, Object webglTexture);
    native public void compressedTexImage2D();
    native public void texImage2D();
    native public void clearColor(double r, double g, double b, double a);
    native public void clearDepth(double depth);
    native public void clearStencil(Object stencil);
    native public void scissor(Object scissor);
    native public void viewport(Object viewport);
    native public void reset();
    protected WebGLState(){}
}

