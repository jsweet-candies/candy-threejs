package def.threejs.three;
public class WebGLShadowMap extends def.js.Object {
    public WebGLShadowMap(Renderer _renderer, Object[] _lights, Object[] _objects){}
    public Boolean enabled;
    public Boolean autoUpdate;
    public Boolean needsUpdate;
    public ShadowMapType type;
    public CullFace cullFace;
    native public void render(Scene scene, Camera camera);
    protected WebGLShadowMap(){}
}

