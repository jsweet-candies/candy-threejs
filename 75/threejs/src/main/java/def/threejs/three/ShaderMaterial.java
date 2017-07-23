package def.threejs.three;
public class ShaderMaterial extends Material {
    public ShaderMaterial(ShaderMaterialParameters parameters){}
    public Object defines;
    public Object uniforms;
    public String vertexShader;
    public String fragmentShader;
    public Shading shading;
    public double linewidth;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public Boolean fog;
    public Boolean lights;
    public Colors vertexColors;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    public Object derivatives;
    public Extensions extensions;
    public Object defaultAttributeValues;
    public String index0AttributeName;
    native public void setValues(ShaderMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public ShaderMaterial Clone();
    native public ShaderMaterial copy(ShaderMaterial source);
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

