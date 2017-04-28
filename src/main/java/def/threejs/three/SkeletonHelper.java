package def.threejs.three;
public class SkeletonHelper extends LineSegments {
    public SkeletonHelper(Object3D bone){}
    public Bone[] bones;
    public Object3D root;
    native public Bone[] getBoneList(Object3D object);
    native public void update();
    protected SkeletonHelper(){}
}

