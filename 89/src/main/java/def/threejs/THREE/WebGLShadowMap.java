package def.threejs.THREE;
public class WebGLShadowMap extends def.js.Object {
    public WebGLShadowMap(Renderer _renderer, Object[] _lights, Object[] _objects, Object capabilities){}
    public Boolean enabled;
    public Boolean autoUpdate;
    public Boolean needsUpdate;
    public ShadowMapType type;
    public Boolean renderReverseSided;
    public Boolean renderSingleSided;
    native public void render(Scene scene, Camera camera);
    /**
     * @deprecated Use {@link WebGLShadowMap#renderReverseSided .shadowMap.renderReverseSided} instead.
     */
    public Object cullFace;
    protected WebGLShadowMap(){}
}

