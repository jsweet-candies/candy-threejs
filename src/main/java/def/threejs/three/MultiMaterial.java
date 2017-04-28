package def.threejs.three;
public class MultiMaterial extends Material {
    public MultiMaterial(Material[] materials){}
    public Material[] materials;
    native public Object toJSON(Object meta);
    @jsweet.lang.Name("clone")
    native public MultiMaterial Clone();
    public MultiMaterial(){}
}

