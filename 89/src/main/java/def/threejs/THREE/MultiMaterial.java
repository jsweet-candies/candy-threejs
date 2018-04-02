package def.threejs.THREE;
/**
 * @deprecated Use an Array instead.
 */
public class MultiMaterial extends Material {
    public MultiMaterial(Material[] materials){}
    public Boolean isMultiMaterial;
    public Material[] materials;
    native public Object toJSON(Object meta);
    public MultiMaterial(){}
}

