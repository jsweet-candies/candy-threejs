package def.threejs.three;
/**
     * ( interface Vector&lt;T&gt; )
     *
     * Abstract interface of Vector2, Vector3 and Vector4.
     * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
     * Those definitions will be changed when TypeScript innovates Generics to be type safe.
     *
     * @example
     * var v:THREE.Vector = new THREE.Vector3();
     * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3));    // invalid but compiled successfully
     */
@jsweet.lang.Interface
public abstract class Vector extends def.js.Object {
    native public void setComponent(double index, double value);
    native public double getComponent(double index);
    /**
         * copy(v:T):T;
         */
    native public Vector copy(Vector v);
    /**
         * add(v:T):T;
         */
    native public Vector add(Vector v);
    /**
         * addVectors(a:T, b:T):T;
         */
    native public Vector addVectors(Vector a, Vector b);
    /**
         * sub(v:T):T;
         */
    native public Vector sub(Vector v);
    /**
         * subVectors(a:T, b:T):T;
         */
    native public Vector subVectors(Vector a, Vector b);
    /**
         * multiplyScalar(s:number):T;
         */
    native public Vector multiplyScalar(double s);
    /**
         * divideScalar(s:number):T;
         */
    native public Vector divideScalar(double s);
    /**
         * negate():T;
         */
    native public Vector negate();
    /**
         * dot(v:T):T;
         */
    native public double dot(Vector v);
    /**
         * lengthSq():number;
         */
    native public double lengthSq();
    /**
         * length():number;
         */
    native public double length();
    /**
         * normalize():T;
         */
    native public Vector normalize();
    /**
         * NOTE: Vector4 doesn't have the property.
         *
         * distanceTo(v:T):number;
         */
    native public double distanceTo(Vector v);
    /**
         * NOTE: Vector4 doesn't have the property.
         *
         * distanceToSquared(v:T):number;
         */
    native public double distanceToSquared(Vector v);
    /**
         * setLength(l:number):T;
         */
    native public Vector setLength(double l);
    /**
         * lerp(v:T, alpha:number):T;
         */
    native public Vector lerp(Vector v, double alpha);
    /**
         * equals(v:T):boolean;
         */
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Vector v);
    /**
         * clone():T;
         */
    @jsweet.lang.Name("clone")
    native public Vector Clone();
}

