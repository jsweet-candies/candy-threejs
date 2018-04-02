package def.threejs.THREE;
import def.js.Float32Array;
/**
 * ( class Matrix3 implements Matrix&lt;Matrix3&gt; )
 */
public class Matrix3 extends Matrix {
    /**
     * Creates an identity matrix.
     */
    public Matrix3(){}
    /**
     * Float32Array with matrix values.
     */
    public Float32Array elements;
    native public Matrix3 set(double n11, double n12, double n13, double n21, double n22, double n23, double n31, double n32, double n33);
    native public Matrix3 identity();
    @jsweet.lang.Name("clone")
    native public Matrix3 Clone();
    native public Matrix3 copy(Matrix3 m);
    native public Matrix3 setFromMatrix4(Matrix4 m);
    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute matrix3.applyToBufferAttribute( attribute )} instead.
     */
    native public BufferAttribute applyToBuffer(BufferAttribute buffer, double offset, double length);
    native public BufferAttribute applyToBufferAttribute(BufferAttribute attribute);
    native public Matrix3 multiplyScalar(double s);
    native public double determinant();
    native public Matrix3 getInverse(Matrix3 matrix, Boolean throwOnDegenerate);
    /**
     * Transposes this matrix in place.
     */
    native public Matrix3 transpose();
    native public Matrix3 getNormalMatrix(Matrix4 matrix4);
    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     */
    native public double[] transposeIntoArray(double[] r);
    native public Matrix3 fromArray(double[] array, double offset);
    native public double[] toArray();
    /**
     * Multiplies this matrix by m.
     */
    native public Matrix3 multiply(Matrix3 m);
    native public Matrix3 premultiply(Matrix3 m);
    /**
     * Sets this matrix to a x b.
     */
    native public Matrix3 multiplyMatrices(Matrix3 a, Matrix3 b);
    /**
     * @deprecated Use {@link Vector3.applyMatrix3 vector.applyMatrix3( matrix )} instead.
     */
    native public Object multiplyVector3(Vector3 vector);
    /**
     * @deprecated This method has been removed completely.
     */
    native public Object multiplyVector3Array(Object a);
    native public Matrix3 getInverse(Matrix4 matrix, Boolean throwOnDegenerate);
    /**
     * @deprecated Use {@link Matrix3#toArray .toArray()} instead.
     */
    native public double[] flattenToArrayOffset(double[] array, double offset);
    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute matrix3.applyToBufferAttribute( attribute )} instead.
     */
    native public BufferAttribute applyToBuffer(BufferAttribute buffer, double offset);
    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute matrix3.applyToBufferAttribute( attribute )} instead.
     */
    native public BufferAttribute applyToBuffer(BufferAttribute buffer);
    native public Matrix3 getInverse(Matrix3 matrix);
    native public Matrix3 fromArray(double[] array);
    native public Matrix3 getInverse(Matrix4 matrix);
}

