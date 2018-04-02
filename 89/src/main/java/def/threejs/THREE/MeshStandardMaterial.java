package def.threejs.THREE;
public class MeshStandardMaterial extends Material {
    public MeshStandardMaterial(MeshStandardMaterialParameters parameters){}
    public Object defines;
    public Color color;
    public double roughness;
    public double metalness;
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
    public double normalScale;
    public Texture displacementMap;
    public double displacementScale;
    public double displacementBias;
    public Texture roughnessMap;
    public Texture metalnessMap;
    public Texture alphaMap;
    public Texture envMap;
    public double envMapIntensity;
    public double refractionRatio;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    native public void setValues(MeshStandardMaterialParameters parameters);
    public MeshStandardMaterial(){}
}

