package def.threejs.THREE;
import def.js.ArrayLike;
/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js">src/core/InstancedInterleavedBuffer.js</a>
 */
public class InstancedInterleavedBuffer extends InterleavedBuffer {
    public InstancedInterleavedBuffer(ArrayLike<Double> array, double stride, double meshPerAttribute){}
    public double meshPerAttribute;
    public InstancedInterleavedBuffer(ArrayLike<Double> array, double stride){}
    public InstancedInterleavedBuffer(Double[] array, double stride, double meshPerAttribute){}
    public InstancedInterleavedBuffer(Double[] array, double stride){}
    protected InstancedInterleavedBuffer(){}
}

