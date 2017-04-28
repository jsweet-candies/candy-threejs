package def.threejs.three;
import def.dom.WebGLRenderingContext;
public class WebGLCapabilities extends def.js.Object {
    public WebGLCapabilities(WebGLRenderingContext gl, Object extensions, WebGLCapabilitiesParameters parameters){}
    public Object precision;
    public Object logarithmicDepthBuffer;
    public Object maxTextures;
    public Object maxVertexTextures;
    public Object maxTextureSize;
    public Object maxCubemapSize;
    public Object maxAttributes;
    public Object maxVertexUniforms;
    public Object maxVaryings;
    public Object maxFragmentUniforms;
    public Object vertexTextures;
    public Object floatFragmentTextures;
    public Object floatVertexTextures;
    native public Object getMaxPrecision(Object precision);
    protected WebGLCapabilities(){}
}

