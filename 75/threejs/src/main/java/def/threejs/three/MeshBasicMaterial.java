package def.threejs.three;
public class MeshBasicMaterial extends Material {
    public MeshBasicMaterial(MeshBasicMaterialParameters parameters){}
    public Color color;
    public Texture map;
    public Texture aoMap;
    public double aoMapIntensity;
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
    native public void setValues(MeshBasicMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public MeshBasicMaterial Clone();
    native public MeshBasicMaterial copy(MeshBasicMaterial source);
    public MeshBasicMaterial(){}
}

