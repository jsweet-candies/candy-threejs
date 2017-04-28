package def.threejs.three;
@jsweet.lang.Interface
public abstract class ShaderMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Object defines;
    @jsweet.lang.Optional
    public Object uniforms;
    @jsweet.lang.Optional
    public String vertexShader;
    @jsweet.lang.Optional
    public String fragmentShader;
    @jsweet.lang.Optional
    public Shading shading;
    @jsweet.lang.Optional
    public double lineWidth;
    @jsweet.lang.Optional
    public Boolean wireframe;
    @jsweet.lang.Optional
    public double wireframeLinewidth;
    @jsweet.lang.Optional
    public Boolean fog;
    @jsweet.lang.Optional
    public Boolean lights;
    @jsweet.lang.Optional
    public Colors vertexColors;
    @jsweet.lang.Optional
    public Boolean skinning;
    @jsweet.lang.Optional
    public Boolean morphTargets;
    @jsweet.lang.Optional
    public Boolean morphNormals;
}

