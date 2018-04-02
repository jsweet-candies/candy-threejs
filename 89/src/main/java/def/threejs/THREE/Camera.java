package def.threejs.THREE;
/**
 * Abstract base class for cameras. This class should always be inherited when you build a new camera.
 */
public class Camera extends Object3D {
    /**
     * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
     */
    public Camera(){}
    /**
     * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
     */
    public Matrix4 matrixWorldInverse;
    /**
     * This is the matrix which contains the projection.
     */
    public Matrix4 projectionMatrix;
    native public Vector3 getWorldDirection(Vector3 optionalTarget);
    native public Vector3 getWorldDirection();
}

