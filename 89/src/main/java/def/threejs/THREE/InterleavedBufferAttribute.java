package def.threejs.THREE;
/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js">src/core/InterleavedBufferAttribute.js</a>
 */
public class InterleavedBufferAttribute extends def.js.Object {
    public InterleavedBufferAttribute(InterleavedBuffer interleavedBuffer, double itemSize, double offset, Boolean normalized){}
    public String uuid;
    public InterleavedBuffer data;
    public double itemSize;
    public double offset;
    public double count;
    public Boolean normalized;
    public Object[] array;
    native public double getX(double index);
    native public InterleavedBufferAttribute setX(double index, double x);
    native public double getY(double index);
    native public InterleavedBufferAttribute setY(double index, double y);
    native public double getZ(double index);
    native public InterleavedBufferAttribute setZ(double index, double z);
    native public double getW(double index);
    native public InterleavedBufferAttribute setW(double index, double z);
    native public InterleavedBufferAttribute setXY(double index, double x, double y);
    native public InterleavedBufferAttribute setXYZ(double index, double x, double y, double z);
    native public InterleavedBufferAttribute setXYZW(double index, double x, double y, double z, double w);
    /**
     * @deprecated Use {@link InterleavedBufferAttribute#count .count} instead.
     */
    public double length;
    public InterleavedBufferAttribute(InterleavedBuffer interleavedBuffer, double itemSize, double offset){}
    protected InterleavedBufferAttribute(){}
}

