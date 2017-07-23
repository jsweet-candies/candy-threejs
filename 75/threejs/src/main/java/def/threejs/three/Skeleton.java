package def.threejs.three;
import def.js.Float32Array;
public class Skeleton extends def.js.Object {
    public Skeleton(Bone[] bones, Matrix4[] boneInverses, Boolean useVertexTexture){}
    public Boolean useVertexTexture;
    public Matrix4 identityMatrix;
    public Bone[] bones;
    public double boneTextureWidth;
    public double boneTextureHeight;
    public Float32Array boneMatrices;
    public DataTexture boneTexture;
    public Matrix4[] boneInverses;
    native public void calculateInverses(Bone bone);
    native public void pose();
    native public void update();
    @jsweet.lang.Name("clone")
    native public Skeleton Clone();
    public Skeleton(Bone[] bones, Matrix4[] boneInverses){}
    public Skeleton(Bone[] bones){}
    protected Skeleton(){}
}

