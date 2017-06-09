package def.threejs.three;
public class MultiMaterial extends Material {
    public MultiMaterial(Material[] materials){}
    public Material[] materials;
    @jsweet.lang.Name("clone")
    native public MultiMaterial Clone();
    public MultiMaterial(){}
}

