package def.threejs.THREE;
public class TubeBufferGeometry extends BufferGeometry {
    public TubeBufferGeometry(Curve<Vector3> path, double segments, double radius, double radiusSegments, Boolean closed){}
    public Parameters parameters;
    public Vector3[] tangents;
    public Vector3[] normals;
    public Vector3[] binormals;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public Curve<Vector3> path;
        public double segments;
        public double radius;
        public double radialSegments;
        public Boolean closed;
    }
    public TubeBufferGeometry(Curve<Vector3> path, double segments, double radius, double radiusSegments){}
    public TubeBufferGeometry(Curve<Vector3> path, double segments, double radius){}
    public TubeBufferGeometry(Curve<Vector3> path, double segments){}
    public TubeBufferGeometry(Curve<Vector3> path){}
    protected TubeBufferGeometry(){}
}

