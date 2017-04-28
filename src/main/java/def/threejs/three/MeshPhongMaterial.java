package def.threejs.three;
public class MeshPhongMaterial extends Material {
    public MeshPhongMaterial(MeshPhongMaterialParameters parameters){}
    public Color color;
    public Color specular;
    public double shininess;
    public Texture map;
    public Texture lightMap;
    public double lightMapIntensity;
    public Texture aoMap;
    public double aoMapIntensity;
    public Color emissive;
    public double emissiveIntensity;
    public Texture emissiveMap;
    public Texture bumpMap;
    public double bumpScale;
    public Texture normalMap;
    public Vector2 normalScale;
    public Texture displacementMap;
    public double displacementScale;
    public double displacementBias;
    public Texture specularMap;
    public Texture alphaMap;
    public Texture envMap;
    public Combine combine;
    public double reflectivity;
    public double refractionRatio;
    public Boolean fog;
    public Shading shading;
    public Blending blending;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public String wireframeLinecap;
    public String wireframeLinejoin;
    public Colors vertexColors;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    public Boolean metal;
    native public void setValues(MeshPhongMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public MeshPhongMaterial Clone();
    native public MeshPhongMaterial copy(MeshPhongMaterial source);
    public MeshPhongMaterial(){}
}

