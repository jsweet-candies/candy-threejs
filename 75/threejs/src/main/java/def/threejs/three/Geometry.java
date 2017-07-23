package def.threejs.three;
/**
     * Base class for geometries
     *
     * # Example
     *     var geometry = new THREE.Geometry();
     *     geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) );
     *     geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) );
     *     geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) );
     *     geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
     *     geometry.computeBoundingSphere();
     *
     * @see https://github.com/mrdoob/three.js/blob/master/src/core/Geometry.js
     */
public class Geometry extends def.js.Object {
    public Geometry(){}
    /**
         * Unique number of this geometry instance
         */
    public double id;
    public String uuid;
    /**
         * Name for this geometry. Default is an empty string.
         */
    public String name;
    public String type;
    /**
         * The array of vertices hold every position of points of the model.
         * To signal an update in this array, Geometry.verticesNeedUpdate needs to be set to true.
         */
    public Vector3[] vertices;
    /**
         * Array of vertex colors, matching number and order of vertices.
         * Used in ParticleSystem, Line and Ribbon.
         * Meshes use per-face-use-of-vertex colors embedded directly in faces.
         * To signal an update in this array, Geometry.colorsNeedUpdate needs to be set to true.
         */
    public Color[] colors;
    /**
         * Array of triangles or/and quads.
         * The array of faces describe how each vertex in the model is connected with each other.
         * To signal an update in this array, Geometry.elementsNeedUpdate needs to be set to true.
         */
    public Face3[] faces;
    /**
         * Array of face UV layers.
         * Each UV layer is an array of UV matching order and number of vertices in faces.
         * To signal an update in this array, Geometry.uvsNeedUpdate needs to be set to true.
         */
    public Vector2[][][] faceVertexUvs;
    /**
         * Array of morph targets. Each morph target is a Javascript object:
         *
         *     { name: "targetName", vertices: [ new THREE.Vector3(), ... ] }
         *
         * Morph vertices match number and order of primary vertices.
         */
    public MorphTarget[] morphTargets;
    /**
         * Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:
         *
         *     morphNormal = { name: "NormalName", normals: [ new THREE.Vector3(), ... ] }
         */
    public MorphNormals[] morphNormals;
    /**
         * Array of skinning weights, matching number and order of vertices.
         */
    public double[] skinWeights;
    /**
         * Array of skinning indices, matching number and order of vertices.
         */
    public double[] skinIndices;
    /**
         *
         */
    public double[] lineDistances;
    /**
         * Bounding box.
         */
    public Box3 boundingBox;
    /**
         * Bounding sphere.
         */
    public BoundingSphere boundingSphere;
    /**
         * Set to true if the vertices array has been updated.
         */
    public Boolean verticesNeedUpdate;
    /**
         * Set to true if the faces array has been updated.
         */
    public Boolean elementsNeedUpdate;
    /**
         * Set to true if the uvs array has been updated.
         */
    public Boolean uvsNeedUpdate;
    /**
         * Set to true if the normals array has been updated.
         */
    public Boolean normalsNeedUpdate;
    /**
         * Set to true if the colors array has been updated.
         */
    public Boolean colorsNeedUpdate;
    /**
         * Set to true if the linedistances array has been updated.
         */
    public Boolean lineDistancesNeedUpdate;
    /**
         *
         */
    public Boolean groupsNeedUpdate;
    /**
         * Bakes matrix transform directly into vertex coordinates.
         */
    native public Geometry applyMatrix(Matrix4 matrix);
    native public Geometry rotateX(double angle);
    native public Geometry rotateY(double angle);
    native public Geometry rotateZ(double angle);
    native public Geometry translate(double x, double y, double z);
    native public Geometry scale(double x, double y, double z);
    native public void lookAt(Vector3 vector);
    native public Geometry fromBufferGeometry(BufferGeometry geometry);
    native public Vector3 center();
    native public Geometry normalize();
    /**
         * Computes face normals.
         */
    native public void computeFaceNormals();
    /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         */
    native public void computeVertexNormals(Boolean areaWeighted);
    /**
         * Computes morph normals.
         */
    native public void computeMorphNormals();
    native public void computeLineDistances();
    /**
         * Computes bounding box of the geometry, updating {@link Geometry.boundingBox} attribute.
         */
    native public void computeBoundingBox();
    /**
         * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
         * Neither bounding boxes or bounding spheres are computed by default. They need to be explicitly computed, otherwise they are null.
         */
    native public void computeBoundingSphere();
    native public void merge(Geometry geometry, Matrix matrix, double materialIndexOffset);
    native public void mergeMesh(Mesh mesh);
    /**
         * Checks for duplicate vertices using hashmap.
         * Duplicated vertices are removed and faces' vertices are updated.
         */
    native public double mergeVertices();
    native public void sortFacesByMaterialIndex();
    native public Object toJSON();
    /**
         * Creates a new clone of the Geometry.
         */
    @jsweet.lang.Name("clone")
    native public Geometry Clone();
    native public Geometry copy(Geometry source);
    /**
         * Removes The object from memory.
         * Don't forget to call this method when you remove an geometry because it can cuase meomory leaks.
         */
    native public void dispose();
    public Bone[] bones;
    public AnimationClip animation;
    public AnimationClip[] animations;
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void dispatchEvent(EventData event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
    /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         */
    native public void computeVertexNormals();
    native public void merge(Geometry geometry, Matrix matrix);
}

