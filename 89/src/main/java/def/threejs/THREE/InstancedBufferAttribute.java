package def.threejs.THREE;
import def.js.ArrayLike;
/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
 */
public class InstancedBufferAttribute extends BufferAttribute {
    public InstancedBufferAttribute(ArrayLike<Double> data, double itemSize, double meshPerAttribute){}
    public double meshPerAttribute;
    public InstancedBufferAttribute(ArrayLike<Double> data, double itemSize){}
    public InstancedBufferAttribute(Double[] data, double itemSize, double meshPerAttribute){}
    public InstancedBufferAttribute(Double[] data, double itemSize){}
    protected InstancedBufferAttribute(){}
}

