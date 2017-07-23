package def.threejs.three;
/**
     * Triangle face.
     *
     * # Example
     *     var normal = new THREE.Vector3( 0, 1, 0 );
     *     var color = new THREE.Color( 0xffaa00 );
     *     var face = new THREE.Face3( 0, 1, 2, normal, color, 0 );
     *
     * @source https://github.com/mrdoob/three.js/blob/master/src/core/Face3.js
     */
public class Face3 extends def.js.Object {
    /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
    public Face3(double a, double b, double c, Vector3 normal, Color color, double materialIndex){}
    public Face3(double a, double b, double c, Vector3 normal, Color[] vertexColors, double materialIndex){}
    public Face3(double a, double b, double c, Vector3[] vertexNormals, Color color, double materialIndex){}
    public Face3(double a, double b, double c, Vector3[] vertexNormals, Color[] vertexColors, double materialIndex){}
    /**
         * Vertex A index.
         */
    public double a;
    /**
         * Vertex B index.
         */
    public double b;
    /**
         * Vertex C index.
         */
    public double c;
    /**
         * Face normal.
         */
    public Vector3 normal;
    /**
         * Array of 4 vertex normals.
         */
    public Vector3[] vertexNormals;
    /**
         * Face color.
         */
    public Color color;
    /**
         * Array of 4 vertex normals.
         */
    public Color[] vertexColors;
    /**
         * Material index (points to {@link Geometry.materials}).
         */
    public double materialIndex;
    @jsweet.lang.Name("clone")
    native public Face3 Clone();
    native public Face3 copy(Face3 source);
    /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
    public Face3(double a, double b, double c, Vector3 normal, Color color){}
    /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
    public Face3(double a, double b, double c, Vector3 normal){}
    /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
    public Face3(double a, double b, double c){}
    public Face3(double a, double b, double c, Vector3 normal, Color[] vertexColors){}
    public Face3(double a, double b, double c, Vector3[] vertexNormals, Color color){}
    public Face3(double a, double b, double c, Vector3[] vertexNormals){}
    public Face3(double a, double b, double c, Vector3[] vertexNormals, Color[] vertexColors){}
    protected Face3(){}
}

