package def.threejs.three;
/**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js">src/core/InstancedBufferGeometry.js</a>
     */
public class InstancedBufferGeometry extends BufferGeometry {
    public InstancedBufferGeometry(){}
    public Groups[] groups;
    public double maxInstancedCount;
    native public void addGroup(double start, double count, double instances);
    @jsweet.lang.Name("clone")
    native public InstancedBufferGeometry Clone();
    native public InstancedBufferGeometry copy(InstancedBufferGeometry source);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Groups extends def.js.Object {
        public double start;
        public double count;
        public double instances;
    }
}

