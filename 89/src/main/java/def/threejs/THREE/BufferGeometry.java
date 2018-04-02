package def.threejs.THREE;
/**
 * This is a superefficent class for geometries because it saves all data in buffers.
 * It reduces memory costs and cpu cycles. But it is not as easy to work with because of all the nessecary buffer calculations.
 * It is mainly interesting when working with static objects.
 *
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js">src/core/BufferGeometry.js</a>
 */
public class BufferGeometry extends EventDispatcher {
    /**
     * This creates a new BufferGeometry. It also sets several properties to an default value.
     */
    public BufferGeometry(){}
    public static double MaxIndex;
    /**
     * Unique number of this buffergeometry instance
     */
    public double id;
    public String uuid;
    public String name;
    public String type;
    public BufferAttribute index;
    public jsweet.util.union.Union<BufferAttribute,InterleavedBufferAttribute[]> attributes;
    public Object morphAttributes;
    public Groups[] groups;
    public Box3 boundingBox;
    public Sphere boundingSphere;
    public DrawRange drawRange;
    native public BufferAttribute getIndex();
    native public void setIndex(BufferAttribute index);
    native public BufferGeometry addAttribute(String name, BufferAttribute attribute);
    native public jsweet.util.union.Union<BufferAttribute,InterleavedBufferAttribute> getAttribute(String name);
    native public BufferGeometry removeAttribute(String name);
    native public void addGroup(double start, double count, double materialIndex);
    native public void clearGroups();
    native public void setDrawRange(double start, double count);
    /**
     * Bakes matrix transform directly into vertex coordinates.
     */
    native public BufferGeometry applyMatrix(Matrix4 matrix);
    native public BufferGeometry rotateX(double angle);
    native public BufferGeometry rotateY(double angle);
    native public BufferGeometry rotateZ(double angle);
    native public BufferGeometry translate(double x, double y, double z);
    native public BufferGeometry scale(double x, double y, double z);
    native public void lookAt(Vector3 v);
    native public Vector3 center();
    native public BufferGeometry setFromObject(Object3D object);
    native public BufferGeometry setFromPoints(Vector3[] points);
    native public void updateFromObject(Object3D object);
    native public BufferGeometry fromGeometry(Geometry geometry, Object settings);
    native public BufferGeometry fromDirectGeometry(DirectGeometry geometry);
    /**
     * Computes bounding box of the geometry, updating Geometry.boundingBox attribute.
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are null.
     */
    native public void computeBoundingBox();
    /**
     * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
     * Bounding spheres aren't' computed by default. They need to be explicitly computed, otherwise they are null.
     */
    native public void computeBoundingSphere();
    /**
     * Computes vertex normals by averaging face normals.
     */
    native public void computeVertexNormals();
    native public BufferGeometry merge(BufferGeometry geometry, double offset);
    native public void normalizeNormals();
    native public BufferGeometry toNonIndexed();
    native public Object toJSON();
    @jsweet.lang.Name("clone")
    native public BufferGeometry Clone();
    native public BufferGeometry copy(BufferGeometry source);
    /**
     * Disposes the object from memory.
     * You need to call this when you want the bufferGeometry removed while the application is running.
     */
    native public void dispose();
    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    public Object drawcalls;
    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    public Object offsets;
    /**
     * @deprecated Use {@link BufferGeometry#setIndex .setIndex()} instead.
     */
    native public void addIndex(Object index);
    /**
     * @deprecated Use {@link BufferGeometry#addGroup .addGroup()} instead.
     */
    native public void addDrawCall(Object start, Object count, Object indexOffset);
    /**
     * @deprecated Use {@link BufferGeometry#clearGroups .clearGroups()} instead.
     */
    native public void clearDrawCalls();
    native public Object addAttribute(Object name, Object array, Object itemSize);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Groups extends def.js.Object {
        public double start;
        public double count;
        @jsweet.lang.Optional
        public double materialIndex;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class DrawRange extends def.js.Object {
        public double start;
        public double count;
    }
    native public void addGroup(double start, double count);
    native public BufferGeometry fromGeometry(Geometry geometry);
    /**
     * @deprecated Use {@link BufferGeometry#addGroup .addGroup()} instead.
     */
    native public void addDrawCall(Object start, Object count);
    native public void setIndex(double[] index);
    native public BufferGeometry addAttribute(String name, InterleavedBufferAttribute attribute);
}

