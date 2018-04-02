package def.threejs.THREE;
public class ShaderMaterial extends Material {
    public ShaderMaterial(ShaderMaterialParameters parameters){}
    public Object defines;
    public Uniforms uniforms;
    public String vertexShader;
    public String fragmentShader;
    public double linewidth;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public Boolean lights;
    public Boolean clipping;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    public Object derivatives;
    public Extensions extensions;
    public Object defaultAttributeValues;
    public String index0AttributeName;
    native public void setValues(ShaderMaterialParameters parameters);
    native public Object toJSON(Object meta);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Uniforms extends def.js.Object {
        native public IUniform $get(String uniform);
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Extensions extends def.js.Object {
        public Boolean derivatives;
        public Boolean fragDepth;
        public Boolean drawBuffers;
        public Boolean shaderTextureLOD;
    }
    public ShaderMaterial(){}
}

