package def.threejs.three;
/**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js">src/core/DirectGeometry.js</a>
     */
public class DirectGeometry extends def.js.Object {
    public DirectGeometry(){}
    public double id;
    public String uuid;
    public String name;
    public String type;
    public double[] indices;
    public Vector3[] vertices;
    public Vector3[] normals;
    public Color[] colors;
    public Vector2[] uvs;
    public Vector2[] uvs2;
    public Groups[] groups;
    public MorphTarget[] morphTargets;
    public double[] skinWeights;
    public double[] skinIndices;
    public Box3 boundingBox;
    public BoundingSphere boundingSphere;
    public Boolean verticesNeedUpdate;
    public Boolean normalsNeedUpdate;
    public Boolean colorsNeedUpdate;
    public Boolean uvsNeedUpdate;
    public Boolean groupsNeedUpdate;
    native public void computeBoundingBox();
    native public void computeBoundingSphere();
    native public void computeGroups(Geometry geometry);
    native public DirectGeometry fromGeometry(Geometry geometry);
    native public void dispose();
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void dispatchEvent(EventData event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Groups extends def.js.Object {
        public double start;
        public double materialIndex;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
}

