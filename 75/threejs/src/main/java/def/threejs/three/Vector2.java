package def.threejs.three;
/**
     * 2D vector.
     *
     * ( class Vector2 implements Vector<Vector2> )
     */
public class Vector2 extends Vector {
    public Vector2(double x, double y){}
    public double x;
    public double y;
    public double width;
    public double height;
    /**
         * Sets value of this vector.
         */
    native public Vector2 set(double x, double y);
    native public Vector2 setScalar(double scalar);
    /**
         * Sets X component of this vector.
         */
    native public Vector2 setX(double x);
    /**
         * Sets Y component of this vector.
         */
    native public Vector2 setY(double y);
    /**
         * Sets a component of this vector.
         */
    native public void setComponent(double index, double value);
    /**
         * Gets a component of this vector.
         */
    native public double getComponent(double index);
    /**
         * Clones this vector.
         */
    @jsweet.lang.Name("clone")
    native public Vector2 Clone();
    /**
         * Copies value of v to this vector.
         */
    native public Vector2 copy(Vector2 v);
    /**
         * Adds v to this vector.
         */
    native public Vector2 add(Vector2 v);
    /**
         * Sets this vector to a + b.
         */
    native public Vector2 addScalar(double s);
    native public Vector2 addVectors(Vector2 a, Vector2 b);
    native public Vector2 addScaledVector(Vector2 v, double s);
    /**
         * Subtracts v from this vector.
         */
    native public Vector2 sub(Vector2 v);
    /**
         * Sets this vector to a - b.
         */
    native public Vector2 subVectors(Vector2 a, Vector2 b);
    native public Vector2 multiply(Vector2 v);
    /**
         * Multiplies this vector by scalar s.
         */
    native public Vector2 multiplyScalar(double scalar);
    native public Vector2 divide(Vector2 v);
    /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0 ) if s == 0.
         */
    native public Vector2 divideScalar(double s);
    native public Vector2 min(Vector2 v);
    native public Vector2 max(Vector2 v);
    native public Vector2 clamp(Vector2 min, Vector2 max);
    native public Vector2 clampScalar(double min, double max);
    native public Vector2 clampLength(double min, double max);
    native public Vector2 floor();
    native public Vector2 ceil();
    native public Vector2 round();
    native public Vector2 roundToZero();
    /**
         * Inverts this vector.
         */
    native public Vector2 negate();
    /**
         * Computes dot product of this vector and v.
         */
    native public double dot(Vector2 v);
    /**
         * Computes squared length of this vector.
         */
    native public double lengthSq();
    /**
         * Computes length of this vector.
         */
    native public double length();
    native public double lengthManhattan();
    /**
         * Normalizes this vector.
         */
    native public Vector2 normalize();
    /**
         * computes the angle in radians with respect to the positive x-axis
         */
    native public double angle();
    /**
         * Computes distance of this vector to v.
         */
    native public double distanceTo(Vector2 v);
    /**
         * Computes squared distance of this vector to v.
         */
    native public double distanceToSquared(Vector2 v);
    /**
         * Normalizes this vector and multiplies it by l.
         */
    native public Vector2 setLength(double length);
    native public Vector2 lerp(Vector2 v, double alpha);
    native public Vector2 lerpVectors(Vector2 v1, Vector2 v2, double alpha);
    /**
         * Checks for strict equality of this vector and v.
         */
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Vector2 v);
    native public Vector2 fromArray(double[] xy, double offset);
    native public double[] toArray(double[] xy, double offset);
    native public Vector2 fromAttribute(BufferAttribute attribute, double index, double offset);
    native public Vector2 rotateAround(Vector2 center, double angle);
    public Vector2(double x){}
    public Vector2(){}
    native public Vector2 fromArray(double[] xy);
    native public double[] toArray(double[] xy);
    native public double[] toArray();
    native public Vector2 fromAttribute(BufferAttribute attribute, double index);
}

