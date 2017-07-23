package def.threejs.three;
public class MeshPhysicalMaterial extends MeshStandardMaterial {
    public MeshPhysicalMaterial(MeshPhysicalMaterialParameters parameters){}
    public Object defines;
    public double reflectivity;
    public double clearCoat;
    public double clearCoatRoughness;
    native public void setValues(MeshPhysicalMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public MeshPhysicalMaterial Clone();
    native public MeshPhysicalMaterial copy(MeshPhysicalMaterial source);
    public MeshPhysicalMaterial(){}
}

