package def.threejs.three;
public class Bone extends Object3D {
    public Bone(SkinnedMesh skin){}
    public SkinnedMesh skin;
    @jsweet.lang.Name("clone")
    native public Bone Clone();
    native public Bone copy(Bone source);
    protected Bone(){}
}

