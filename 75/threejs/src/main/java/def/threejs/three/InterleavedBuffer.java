package def.threejs.three;
import def.js.ArrayLike;
/**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js">src/core/InterleavedBuffer.js</a>
     */
public class InterleavedBuffer extends def.js.Object {
    public InterleavedBuffer(ArrayLike<Double> array, double stride){}
    public ArrayLike<Double> array;
    public double stride;
    public Boolean dynamic;
    public UpdateRange updateRange;
    public double version;
    public double length;
    public double count;
    public Boolean needsUpdate;
    native public InterleavedBuffer setDynamic(Boolean dynamic);
    native public InterleavedBuffer copy(InterleavedBuffer source);
    native public InterleavedBuffer copyAt(double index1, InterleavedBufferAttribute attribute, double index2);
    native public InterleavedBuffer set(ArrayLike<Double> value, double index);
    @jsweet.lang.Name("clone")
    native public InterleavedBuffer Clone();
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class UpdateRange extends def.js.Object {
        public double offset;
        public double count;
    }
    public InterleavedBuffer(Double[] array, double stride){}
    native public InterleavedBuffer set(Double[] value, double index);
    protected InterleavedBuffer(){}
}

