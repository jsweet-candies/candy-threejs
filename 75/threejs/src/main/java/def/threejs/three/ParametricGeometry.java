package def.threejs.three;
public class ParametricGeometry extends Geometry {
    public ParametricGeometry(java.util.function.BiFunction<Double,Double,Vector3> func, double slices, double stacks){}
    public Parameters parameters;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public java.util.function.BiFunction<Double,Double,Vector3> func;
        public double slices;
        public double stacks;
    }
    protected ParametricGeometry(){}
}

