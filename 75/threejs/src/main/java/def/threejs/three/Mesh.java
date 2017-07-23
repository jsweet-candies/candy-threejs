package def.threejs.three;
public class Mesh extends Object3D {
    public Mesh(Geometry geometry, Material material){}
    public Mesh(BufferGeometry geometry, Material material){}
    public jsweet.util.union.Union<Geometry,BufferGeometry> geometry;
    public Material material;
    public TrianglesDrawModes drawMode;
    native public void setDrawMode(TrianglesDrawModes drawMode);
    native public void updateMorphTargets();
    native public double getMorphTargetIndexByName(String name);
    native public void raycast(Raycaster raycaster, Object intersects);
    @jsweet.lang.Name("clone")
    native public Mesh Clone();
    native public Mesh copy(Mesh source);
    public Mesh(Geometry geometry){}
    public Mesh(){}
    public Mesh(BufferGeometry geometry){}
}

