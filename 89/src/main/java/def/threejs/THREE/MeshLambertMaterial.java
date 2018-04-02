package def.threejs.THREE;
public class MeshLambertMaterial extends Material {
    public MeshLambertMaterial(MeshLambertMaterialParameters parameters){}
    public Color color;
    public Color emissive;
    public double emissiveIntensity;
    public Texture emissiveMap;
    public Texture map;
    public Texture lightMap;
    public double lightMapIntensity;
    public Texture aoMap;
    public double aoMapIntensity;
    public Texture specularMap;
    public Texture alphaMap;
    public Texture envMap;
    public Combine combine;
    public double reflectivity;
    public double refractionRatio;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public String wireframeLinecap;
    public String wireframeLinejoin;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    native public void setValues(MeshLambertMaterialParameters parameters);
    public MeshLambertMaterial(){}
}

