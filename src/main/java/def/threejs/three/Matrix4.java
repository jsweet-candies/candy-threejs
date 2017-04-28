package def.threejs.three;
import def.js.Float32Array;
/**
     * A 4x4 Matrix.
     *
     * @example
     * // Simple rig for rotating around 3 axes
     * var m = new THREE.Matrix4();
     * var m1 = new THREE.Matrix4();
     * var m2 = new THREE.Matrix4();
     * var m3 = new THREE.Matrix4();
     * var alpha = 0;
     * var beta = Math.PI;
     * var gamma = Math.PI/2;
     * m1.makeRotationX( alpha );
     * m2.makeRotationY( beta );
     * m3.makeRotationZ( gamma );
     * m.multiplyMatrices( m1, m2 );
     * m.multiply( m3 );
     */
public class Matrix4 extends Matrix {
    public Matrix4(){}
    /**
         * Float32Array with matrix values.
         */
    public Float32Array elements;
    /**
         * Sets all fields of this matrix.
         */
    native public Matrix4 set(double n11, double n12, double n13, double n14, double n21, double n22, double n23, double n24, double n31, double n32, double n33, double n34, double n41, double n42, double n43, double n44);
    /**
         * Resets this matrix to identity.
         */
    native public Matrix4 identity();
    @jsweet.lang.Name("clone")
    native public Matrix4 Clone();
    native public Matrix4 copy(Matrix4 m);
    native public Matrix4 extractPosition(Matrix4 m);
    native public Matrix4 copyPosition(Matrix4 m);
    native public Matrix4 extractBasis(Vector3 xAxis, Vector3 yAxis, Vector3 zAxis);
    native public Matrix4 makeBasis(Vector3 xAxis, Vector3 yAxis, Vector3 zAxis);
    /**
         * Copies the rotation component of the supplied matrix m into this matrix rotation component.
         */
    native public Matrix4 extractRotation(Matrix4 m);
    native public Matrix4 makeRotationFromEuler(Euler euler);
    native public Matrix4 setRotationFromQuaternion(Quaternion q);
    native public Matrix4 makeRotationFromQuaternion(Quaternion q);
    /**
         * Constructs a rotation matrix, looking from eye towards center with defined up vector.
         */
    native public Matrix4 lookAt(Vector3 eye, Vector3 target, Vector3 up);
    /**
         * Multiplies this matrix by m.
         */
    native public Matrix4 multiply(Matrix4 m);
    /**
         * Sets this matrix to a x b.
         */
    native public Matrix4 multiplyMatrices(Matrix4 a, Matrix4 b);
    /**
         * Sets this matrix to a x b and stores the result into the flat array r.
         * r can be either a regular Array or a TypedArray.
         */
    native public Matrix4 multiplyToArray(Matrix4 a, Matrix4 b, double[] r);
    /**
         * Multiplies this matrix by s.
         */
    native public Matrix4 multiplyScalar(double s);
    native public double[] multiplyVector3Array(double[] array);
    native public double[] applyToVector3Array(double[] array, double offset, double length);
    native public BufferAttribute applyToBuffer(BufferAttribute buffer, double offset, double length);
    /**
         * Computes determinant of this matrix.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
         */
    native public double determinant();
    /**
         * Transposes this matrix.
         */
    native public Matrix4 transpose();
    /**
         * Flattens this matrix into supplied flat array starting from offset position in the array.
         */
    native public double[] flattenToArrayOffset(double[] array, double offset);
    /**
         * Sets the position component for this matrix from vector v.
         */
    native public Matrix4 setPosition(Vector3 v);
    /**
         * Sets this matrix to the inverse of matrix m.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
         */
    native public Matrix4 getInverse(Matrix4 m, Boolean throwOnDegeneratee);
    /**
         * Multiplies the columns of this matrix by vector v.
         */
    native public Matrix4 scale(Vector3 v);
    native public double getMaxScaleOnAxis();
    /**
         * Sets this matrix as translation transform.
         */
    native public Matrix4 makeTranslation(double x, double y, double z);
    /**
         * Sets this matrix as rotation transform around x axis by theta radians.
         *
         * @param theta Rotation angle in radians.
         */
    native public Matrix4 makeRotationX(double theta);
    /**
         * Sets this matrix as rotation transform around y axis by theta radians.
         *
         * @param theta Rotation angle in radians.
         */
    native public Matrix4 makeRotationY(double theta);
    /**
         * Sets this matrix as rotation transform around z axis by theta radians.
         *
         * @param theta Rotation angle in radians.
         */
    native public Matrix4 makeRotationZ(double theta);
    /**
         * Sets this matrix as rotation transform around axis by angle radians.
         * Based on http://www.gamedev.net/reference/articles/article1199.asp.
         *
         * @param axis Rotation axis.
         * @param theta Rotation angle in radians.
         */
    native public Matrix4 makeRotationAxis(Vector3 axis, double angle);
    /**
         * Sets this matrix as scale transform.
         */
    native public Matrix4 makeScale(double x, double y, double z);
    /**
         * Sets this matrix to the transformation composed of translation, rotation and scale.
         */
    native public Matrix4 compose(Vector3 translation, Quaternion rotation, Vector3 scale);
    /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
    native public Object[] decompose(Vector3 translation, Quaternion rotation, Vector3 scale);
    /**
         * Creates a frustum matrix.
         */
    native public Matrix4 makeFrustum(double left, double right, double bottom, double top, double near, double far);
    /**
         * Creates a perspective projection matrix.
         */
    native public Matrix4 makePerspective(double fov, double aspect, double near, double far);
    /**
         * Creates an orthographic projection matrix.
         */
    native public Matrix4 makeOrthographic(double left, double right, double top, double bottom, double near, double far);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Matrix4 matrix);
    native public Matrix4 fromArray(double[] array);
    native public double[] toArray();
    /**
         * @deprecated Use Vector3.setFromMatrixPosition( matrix )
         */
    native public Object getPosition();
    /**
         * @deprecated Use Vector3.applyMatrix4( matrix ) or Vector3.applyProjection( matrix )
         */
    native public Object multiplyVector3(Object v);
    /**
         * @deprecated Use Vector3.applyMatrix4( matrix )
         */
    native public Object multiplyVector4(Object v);
    /**
         * @deprecated Use Vector3.transformDirection( matrix )
         */
    native public void rotateAxis(Object v);
    /**
         * @deprecated Use Vector3.applyMatrix( matrix )
         */
    native public void crossVector(Object v);
    native public double[] applyToVector3Array(double[] array, double offset);
    native public double[] applyToVector3Array(double[] array);
    native public BufferAttribute applyToBuffer(BufferAttribute buffer, double offset);
    native public BufferAttribute applyToBuffer(BufferAttribute buffer);
    /**
         * Sets this matrix to the inverse of matrix m.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
         */
    native public Matrix4 getInverse(Matrix4 m);
    /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
    native public Object[] decompose(Vector3 translation, Quaternion rotation);
    /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
    native public Object[] decompose(Vector3 translation);
    /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
    native public Object[] decompose();
}

