package def.threejs.three;
public class SkinnedMesh extends Mesh {
    public SkinnedMesh(Geometry geometry, MeshBasicMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, MeshDepthMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, MultiMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, MeshLambertMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, MeshNormalMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, MeshPhongMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(Geometry geometry, ShaderMaterial material, Boolean useVertexTexture){}
    public String bindMode;
    public Matrix4 bindMatrix;
    public Matrix4 bindMatrixInverse;
    public Skeleton skeleton;
    native public void bind(Skeleton skeleton, Matrix4 bindMatrix);
    native public void pose();
    native public void normalizeSkinWeights();
    native public void updateMatrixWorld(Boolean force);
    @jsweet.lang.Name("clone")
    native public SkinnedMesh Clone();
    native public SkinnedMesh copy(SkinnedMesh source);
    public SkinnedMesh(Geometry geometry, MeshBasicMaterial material){}
    public SkinnedMesh(Geometry geometry){}
    public SkinnedMesh(){}
    public SkinnedMesh(Geometry geometry, MeshDepthMaterial material){}
    public SkinnedMesh(Geometry geometry, MultiMaterial material){}
    public SkinnedMesh(Geometry geometry, MeshLambertMaterial material){}
    public SkinnedMesh(Geometry geometry, MeshNormalMaterial material){}
    public SkinnedMesh(Geometry geometry, MeshPhongMaterial material){}
    public SkinnedMesh(Geometry geometry, ShaderMaterial material){}
    native public void bind(Skeleton skeleton);
    native public void updateMatrixWorld();
    public SkinnedMesh(BufferGeometry geometry, MeshBasicMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MeshDepthMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MultiMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MeshLambertMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MeshNormalMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MeshPhongMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, ShaderMaterial material, Boolean useVertexTexture){}
    public SkinnedMesh(BufferGeometry geometry, MeshBasicMaterial material){}
    public SkinnedMesh(BufferGeometry geometry){}
    public SkinnedMesh(BufferGeometry geometry, MeshDepthMaterial material){}
    public SkinnedMesh(BufferGeometry geometry, MultiMaterial material){}
    public SkinnedMesh(BufferGeometry geometry, MeshLambertMaterial material){}
    public SkinnedMesh(BufferGeometry geometry, MeshNormalMaterial material){}
    public SkinnedMesh(BufferGeometry geometry, MeshPhongMaterial material){}
    public SkinnedMesh(BufferGeometry geometry, ShaderMaterial material){}
}

