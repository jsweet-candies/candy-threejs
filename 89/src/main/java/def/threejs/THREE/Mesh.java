package def.threejs.THREE;
public class Mesh extends Object3D {
    public Mesh(Geometry geometry, Material material){}
    public jsweet.util.union.Union<Geometry,BufferGeometry> geometry;
    public jsweet.util.union.Union<Material,Material[]> material;
    public TrianglesDrawModes drawMode;
    @jsweet.lang.Optional
    public double[] morphTargetInfluences;
    @jsweet.lang.Optional
    public MorphTargetDictionary morphTargetDictionary;
    native public void setDrawMode(TrianglesDrawModes drawMode);
    native public void updateMorphTargets();
    native public double getMorphTargetIndexByName(String name);
    native public void raycast(Raycaster raycaster, Object intersects);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class MorphTargetDictionary extends def.js.Object {
        native public Number $get(String key);
    }
    public Mesh(Geometry geometry){}
    public Mesh(){}
    public Mesh(Geometry geometry, Material[] material){}
    public Mesh(BufferGeometry geometry, Material[] material){}
    public Mesh(BufferGeometry geometry, Material material){}
    public Mesh(BufferGeometry geometry){}
}

