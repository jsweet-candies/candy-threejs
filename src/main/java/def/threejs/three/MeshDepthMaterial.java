package def.threejs.three;
public class MeshDepthMaterial extends Material {
    public MeshDepthMaterial(MeshDepthMaterialParameters parameters){}
    public Boolean wireframe;
    public double wireframeLinewidth;
    native public void setValues(MeshDepthMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public MeshDepthMaterial Clone();
    native public MeshDepthMaterial copy(MeshDepthMaterial source);
    public MeshDepthMaterial(){}
}

