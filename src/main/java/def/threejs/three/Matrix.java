package def.threejs.three;
import def.js.Float32Array;
/**
     * ( interface Matrix&lt;T&gt; )
     */
@jsweet.lang.Interface
public abstract class Matrix extends def.js.Object {
    /**
         * Float32Array with matrix values.
         */
    public Float32Array elements;
    /**
         * identity():T;
         */
    native public Matrix identity();
    /**
         * copy(m:T):T;
         */
    native public Matrix copy(Matrix m);
    /**
         * multiplyScalar(s:number):T;
         */
    native public Matrix multiplyScalar(double s);
    native public double determinant();
    /**
         * getInverse(matrix:T, throwOnInvertible?:boolean):T;
         */
    native public Matrix getInverse(Matrix matrix, Boolean throwOnInvertible);
    /**
         * transpose():T;
         */
    native public Matrix transpose();
    /**
         * clone():T;
         */
    @jsweet.lang.Name("clone")
    native public Matrix Clone();
    /**
         * getInverse(matrix:T, throwOnInvertible?:boolean):T;
         */
    native public Matrix getInverse(Matrix matrix);
}

